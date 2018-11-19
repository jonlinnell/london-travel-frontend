import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import posed from 'react-pose'
import { get } from 'lodash'

import Attribution from '../components/Attribution'
import TrainService from '../components/TrainService'
import TrainStationLookup from '../components/TrainStationLookup'
import AppError from '../components/AppError'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Pristine from '../components/Pristine'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import IconNationalRail from '../icons/NationalRail'

import { api } from '../../config/config.json'

const INTERVAL = 1 // in minutes

const ViewNationalRailWrapper = styled.div`
  height: 100%;
  margin-bottom: 20vh;
`

const DepartureBoardWrapper = styled.div`
  padding: 12px;

  margin-bottom: 48px;
`

const TrainServices = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledControlForm = styled.div`
  background-color: ${({ theme: { colours: { rail } } }) => rail};
  padding: 12px;
  width: 100%;

  position: fixed;
  z-index: 2;
  bottom: ${({ theme: { navbar: { height, units } } }) => `${height}${units}`};
`

const PosedTrainServiceContainer = posed(TrainServices)({
  enter: { staggerChildren: 300 },
  exit: { staggerChildren: 10, staggerDirection: -1 },
})

class ViewNationalRail extends PureComponent {
  intervalId = null

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      stationCode: null,
      stationName: null,
      destinationCode: null,
      destinationName: null,
      loading: false,
      pristine: true,
      error: null,
      hasError: false,
    }

    this.setStationCode = this.setStationCode.bind(this)
    this.setDestinationCode = this.setDestinationCode.bind(this)
    this.clearStationCode = this.clearStationCode.bind(this)
    this.clearDestinationCode = this.clearDestinationCode.bind(this)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  setStationCode = (code) => {
    this.setState({
      stationCode: code,
    }, () => {
      const { stationCode } = this.state

      if (stationCode) {
        this.fetchData()
        this.intervalId = setInterval(() => this.fetchData(), INTERVAL * 60000)
      } else {
        clearInterval(this.intervalId)
      }
    })
  }

  setDestinationCode = (crs) => {
    this.setState({
      destinationCode: crs,
    }, () => {
      this.fetchData()
      this.intervalId = setInterval(() => this.fetchData(), INTERVAL * 60000)
    })
  }

  clearStationCode = () => this.setState({ stationCode: null, stationName: null, data: [] })

  clearDestinationCode = () => this.setState({ destinationCode: null, destinationName: null }, () => this.fetchData())

  fetchData = () => {
    const { stationCode, destinationCode } = this.state

    this.setState({ loading: true, pristine: false })
    axios.get(`${api}/rail/${stationCode}${destinationCode ? `/${destinationCode}` : ''}`)
      .then((response) => {
        this.setState({
          data: response.data.trainServices,
          stationName: get(response.data.station, 'name', null),
          destinationName: get(response.data.destination, 'name', null),
          loading: false,
          hasError: false,
          error: null,
        })

        document.getElementById('train-services-wrapper').scrollIntoView()
      })
      .catch(error => this.setState({
        data: [],
        stationCode: null,
        stationName: null,
        destinationCode: null,
        destinationName: null,
        hasError: true,
        loading: false,
        error,
      }))
  }

  render() {
    const {
      data,
      stationName,
      destinationName,
      loading,
      hasError,
      error,
      pristine,
    } = this.state

    return (
      <ViewNationalRailWrapper id="train-services-wrapper">
        <Loading loading={loading && !hasError && !data.length}>
          {
            pristine
              ? (
                <Pristine text="Enter a station name below to get started.">yes</Pristine>
              )
              : (
                <DepartureBoardWrapper>
                  {
                    stationName
                      ? (
                        <Header
                          title={stationName}
                          subtitle={`Next trains departing from this station${destinationName ? ` calling at ${destinationName}.` : '.'}`}
                          icon={IconNationalRail}
                          backgroundColour="rail"
                          topFill
                        />
                      )
                      : null
                  }
                  <PosedTrainServiceContainer>
                    {
                      data.map((service, i) => <TrainService key={service.rsid} secondary={i % 2} {...service} />)
                    }
                  </PosedTrainServiceContainer>
                  {
                    !hasError && stationName && data && (
                      <Attribution>
                        Powered by National Rail Enquiries.
                </Attribution>
                    )
                  }
                </DepartureBoardWrapper>
              )
          }
        </Loading>
        {
          hasError && <AppError error={error} callerDescription="train departure board" contained />
        }
        <StyledControlForm>
          <Header title="Enter a station..." icon={faSearch} useFA small />
          <TrainStationLookup label="Station" id="stationCode" onSubmit={this.setStationCode} onClear={this.clearStationCode} />
          <TrainStationLookup label="Show trains calling at" id="destination" onSubmit={this.setDestinationCode} onClear={this.clearDestinationCode} disabled={!stationName} />
        </StyledControlForm>
      </ViewNationalRailWrapper>
    )
  }
}

export default ViewNationalRail
