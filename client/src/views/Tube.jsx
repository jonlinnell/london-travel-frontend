import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Attribution from '../components/Attribution'
import TubeLineInfo from '../components/TubeLineInfo'
import AppError from '../components/AppError'

import { api } from '../../config/config.json'

const INTERVAL = 5 // in minutes

const TubeStatusWrapper = styled.div`
  width: calc(100% - 24px);
  margin: 12px;
`

const LineWrapper = styled.div`
  width: 100%;

  & > div {
    :first-child {
      border-top-left-radius: ${props => props.theme.radius};
      border-top-right-radius: ${props => props.theme.radius};
    }

    :last-child {
      border-bottom-left-radius: ${props => props.theme.radius};
      border-bottom-right-radius: ${props => props.theme.radius};
    }
  }
`

class TubeStatus extends PureComponent {
  intervalId = null

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      error: null,
      hasError: false,
    }
  }

  componentDidMount() {
    this.fetchData()
    this.intervalId = setInterval(() => this.fetchData(), INTERVAL * 60000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = () => {
    axios.get(`${api}/tube`)
      .then(response => this.setState({
        data: response.data,
        hasError: false,
        error: null,
      }))
      .catch(error => this.setState({
        hasError: true,
        error,
      }))
  }

  render() {
    const {
      data,
      hasError,
      error,
    } = this.state

    if (hasError) {
      return <AppError error={error} callerDescription="the tube status" />
    }

    return (
      <TubeStatusWrapper>
        <LineWrapper>
          {
            data.map((line, i) => <TubeLineInfo line={line} key={line.id} zIndex={data.length - i} />)
          }
        </LineWrapper>
        <Attribution>
          Powered by TfL Open Data. Visit tfl.gov.uk for more information.
        </Attribution>
      </TubeStatusWrapper>
    )
  }
}

export default TubeStatus
