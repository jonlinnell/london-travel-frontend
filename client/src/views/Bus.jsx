import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import posed from 'react-pose'

import { faBus } from '@fortawesome/free-solid-svg-icons'

import AppError from '../components/AppError'
import Attribution from '../components/Attribution'
import BusControlForm from '../components/BusControlForm'
import BusInfo from '../components/BusInfo'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Pristine from '../components/Pristine'

import { api } from '../../config/config.json'

const INTERVAL = 30 // in seconds

const ViewBusWrapper = styled.div`
  height: 100%;
  margin-bottom: 15vh;
`

const BusDeparturesWrapper = styled.div`
  padding: 12px;
`

const BusContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  &>:nth-child(odd) {
    background-color: rgba(253, 246, 225, 0.5);
  }
`

const PosedBusContainer = posed(BusContainer)({
  enter: { staggerChildren: 60 },
  exit: { staggerChildren: 10, staggerDirection: -1 },
})

// Allow xxxxx and xxxxx,xxxxx, as both are accepted by the endpoint
const validateStopCode = stopCode => stopCode && (stopCode.length === 5 || stopCode.match(/[0-9]{5},[0-9]{5}/))

class ViewBus extends PureComponent {
  intervalId = null

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      error: null,
      hasError: false,
      loading: false,
      pristine: true,
      stopCode: null,
      stopName: null,
    }

    this.setStopCode = this.setStopCode.bind(this)
  }

  componentDidMount() {
    const { initialCode } = this.props

    if (initialCode) { this.setStopCode(initialCode) }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  setStopCode = (newStopCode) => {
    this.setState({
      pristine: false,
      stopCode: newStopCode,
    }, () => {
      const { stopCode } = this.state

      if (validateStopCode(stopCode)) {
        this.fetchData()
        this.intervalId = setInterval(() => this.fetchData(), INTERVAL * 1000)

        document.getElementById('bus-departures-wrapper').scrollIntoView()
      } else {
        this.setState({
          data: [],
          stopName: null,
        })
        clearInterval(this.intervalId)
      }
    })
  }

  fetchData = () => {
    const { stopCode } = this.state

    this.setState({ loading: true })
    axios.get(`${api}/bus/${stopCode}`)
      .then(response => this.setState({
        data: response.data.buses,
        error: null,
        hasError: false,
        loading: false,
        stopName: response.data.stopName,
      }))
      .catch(error => this.setState({
        data: [],
        error,
        hasError: true,
        loading: false,
        stopName: null,
      }))
  }

  render() {
    const {
      data,
      error,
      hasError,
      loading,
      pristine,
      stopCode,
      stopName,
    } = this.state

    // @TODO: Use PoseGroup for buses, once exit bug is fixed by maintainer
    return (
      <ViewBusWrapper>
        <Loading loading={loading && !hasError && !data.length}>
          {
            pristine
              ? <Pristine text="Enter a stop code below to get started" />
              : stopName && (
                <BusDeparturesWrapper id="bus-departures-wrapper">
                  <Header
                    title={stopName}
                    subtitle="Next buses at this stop."
                    icon={faBus}
                    backgroundColour="bus"
                    topFill
                    useFA
                  />
                  <PosedBusContainer>
                    { data.map(bus => <BusInfo bus={bus} key={bus.journeyId} />) }
                  </PosedBusContainer>
                </BusDeparturesWrapper>
              )
          }
        </Loading>
        {
          !hasError && stopCode && data && (
            <Attribution>
              Powered by TfL Open Data. Visit tfl.gov.uk for more information.
            </Attribution>
          )
        }
        {
          hasError && <AppError error={error} callerDescription="bus departure information" contained />
        }
        <BusControlForm setStopCode={this.setStopCode} />
      </ViewBusWrapper>
    )
  }
}

export default ViewBus
