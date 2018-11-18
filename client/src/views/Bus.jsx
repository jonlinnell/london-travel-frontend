import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import posed from 'react-pose'

import Attribution from '../components/Attribution'
import BusInfo from '../components/BusInfo'
import BusControlForm from '../components/BusControlForm'
import AppError from '../components/AppError'
import Loading from '../components/Loading'

import { api } from '../../config/config.json'

const INTERVAL = 5 // in seconds

const Title = styled.h2`
  margin-top: 0;
`

const ViewBusWrapper = styled.div`
  height: 100%;
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
  enter: { staggerChildren: 300 },
  exit: { staggerChildren: 10, staggerDirection: -1 },
})

const validateStopCode = stopCode => stopCode && stopCode.length === 5

class ViewBus extends PureComponent {
  intervalId = null

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      stopCode: null,
      stopName: null,
      loading: false,
      error: null,
      hasError: false,
    }

    this.setStopCode = this.setStopCode.bind(this)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  setStopCode = (stopCode) => {
    this.setState({
      stopCode,
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
      error,
    } = this.state

    // @TODO: Use PoseGroup for buses, once exit bug is fixed by maintainer
    return (
      <ViewBusWrapper>
        <BusDeparturesWrapper id="bus-departures-wrapper">
          <Loading loading={loading && !hasError && !data.length}>
            <Title>{ stopName }</Title>
            <PosedBusContainer>
              {
                data.map(bus => <BusInfo bus={bus} key={bus.journeyId} />)
              }
            </PosedBusContainer>
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
        </BusDeparturesWrapper>
        <BusControlForm
          setStopCode={this.setStopCode}
        />
      </ViewBusWrapper>
    )
  }
}

export default ViewBus
