import React, { PureComponent, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import posed from 'react-pose'

import { faBus } from '@fortawesome/free-solid-svg-icons'

import Attribution from '../components/Attribution'
import BusInfo from '../components/BusInfo'
import BusControlForm from '../components/BusControlForm'
import AppError from '../components/AppError'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Pristine from '../components/Pristine'

import { api } from '../../config/config.json'

const INTERVAL = 5 // in seconds

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

const validateStopCode = stopCode => stopCode && (stopCode.length === 5 || stopCode.match(/[0-9]{5},[0-9]{5}/))

class ViewBus extends PureComponent {
  intervalId = null

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      stopCode: null,
      stopName: null,
      pristine: true,
      loading: false,
      error: null,
      hasError: false,
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
      stopCode: newStopCode,
      pristine: false,
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
        stopName: response.data.stopName,
        loading: false,
        hasError: false,
        error: null,
      }))
      .catch(error => this.setState({
        data: [],
        stopName: null,
        hasError: true,
        loading: false,
        error,
      }))
  }

  render() {
    const {
      data,
      stopName,
      stopCode,
      loading,
      hasError,
      pristine,
      error,
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
