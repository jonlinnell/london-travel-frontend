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
import RecentSearches from '../components/RecentSearches'

import { addBusStop, getPreviousBusStops } from '../lib/storage'

const { api } = process.env

const INTERVAL = 30 // in seconds
const contentContainerId = 'bus-departures-wrapper'

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
  enter: { opacity: 1, delayChildren: 50, staggerChildren: 50 },
  exit: { opacity: 0, staggerChildren: 10, staggerDirection: -1 },
})

// Allow xxxxx and xxxxx,xxxxx, as both are accepted by the endpoint
const validateStopCode = stopCode => stopCode && (stopCode.length === 5 || stopCode.match(/[0-9]{5},[0-9]{5}/))

const parseError = (error) => {
  if (error.response) {
    const { data, status } = error.response
    let response

    if (status === 500) {
      if (data.match(/416/)) {
        response = ({ errorString: 'This bus stop code doesn\'t seem to exist.' })
      } else if (data.match(/response\.data\.replace is not a function/)) {
        response = ({ errorString: 'No results for this stop.' })
      } else {
        response = ({ errorString: data })
      }

      if (response) { return response }
    }
  }

  return error
}

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

    document.getElementById(contentContainerId).scrollIntoView()

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

        document.getElementById(contentContainerId).scrollIntoView()
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
      .then((response) => {
        this.setState({
          data: response.data.buses,
          error: null,
          hasError: false,
          loading: false,
          stopName: response.data.stopName,
        })

        addBusStop({ name: response.data.stopName, code: stopCode })
      })
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

    const previousBusStops = getPreviousBusStops()

    // @TODO: Use PoseGroup for buses, once exit bug is fixed by maintainer
    return (
      <ViewBusWrapper id={contentContainerId}>
        <Loading loading={loading && !hasError && !data.length}>
          {
            pristine
              ? (
                <Pristine text="Enter a stop code below to get started">
                  {
                    previousBusStops && (
                      <RecentSearches
                        previousSearches={previousBusStops}
                        onSelect={this.setStopCode}
                      />
                    )
                }
                </Pristine>
              )
              : stopName && (
                <BusDeparturesWrapper>
                  <Header
                    title={stopName}
                    subtitle="Next buses at this stop."
                    icon={faBus}
                    backgroundColour="bus"
                    topFill
                    useFA
                  />
                  <PosedBusContainer initialPose="exit" pose={loading ? 'exit' : 'enter'}>
                    { data.map(bus => <BusInfo bus={bus} key={bus.journeyId} />) }
                  </PosedBusContainer>
                  {
                    !hasError && stopCode && data && (
                      <Attribution>
                        Powered by TfL Open Data. Visit tfl.gov.uk for more information.
                      </Attribution>
                    )
                  }
                </BusDeparturesWrapper>
              )
          }
        </Loading>
        {
          hasError && <AppError error={parseError(error)} callerDescription="bus departure information" contained />
        }
        <BusControlForm setStopCode={this.setStopCode} />
      </ViewBusWrapper>
    )
  }
}

export default ViewBus
