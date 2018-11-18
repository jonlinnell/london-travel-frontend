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

import { api } from '../../config/config.json'

const INTERVAL = 1 // in minutes

const Title = styled.h2`
  margin-top: 0;
`

const ViewNationalRailWrapper = styled.div`
  height: 100%;
`

const DepartureBoardWrapper = styled.div`
  padding: 12px;

  margin-bottom: 48px;
`

const TrainServices = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  &>:nth-child(odd) {
    background-color: rgba(233, 235, 242, 0.5);
  }
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
      error: null,
      hasError: false,
    }

    this.setStationCode = this.setStationCode.bind(this)
    this.setDestinationCode = this.setDestinationCode.bind(this)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  setStationCode = (code) => {
    this.setState({
      stationCode: code,
    }, () => {
      const { stationCode } = this.state

      console.log(stationCode)

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

  clearDestination = () => this.setState({ destinationCode: null }, () => this.fetchData())

  fetchData = () => {
    const { stationCode, destinationCode } = this.state

    this.setState({ loading: true })
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
    } = this.state

    // @TODO: Use PoseGroup for buses, once exit bug is fixed by maintainer
    return (
      <ViewNationalRailWrapper id="train-services-wrapper">
        <Loading loading={loading && !hasError && !data.length}>
          <DepartureBoardWrapper>
            <Title>{ stationName }</Title>
            {
              destinationName
                ? <p>Calling at { destinationName }</p>
                : null
            }
            <PosedTrainServiceContainer>
              {
                data.map(service => <TrainService key={service.rsid} {...service} />)
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
        </Loading>
        {
          hasError && <AppError error={error} callerDescription="train departure board" contained />
        }
        <StyledControlForm>
          <TrainStationLookup label="Station:" id="stationCode" onSubmit={this.setStationCode} />
          <TrainStationLookup label="Show trains calling at:" id="destination" onSubmit={this.setDestinationCode} disabled={!stationName} onClear={this.clearDestination} />
        </StyledControlForm>
      </ViewNationalRailWrapper>
    )
  }
}

export default ViewNationalRail
