import React, { Component } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import TubeLineExtendedStatus from './TubeLineExtendedStatus'

const LineContainer = styled.div`
  padding: 12px;

  font-family: "DIN Light";

  background-color: ${({ id, theme }) => theme.lines[id].background};
  color: ${({ id, theme }) => theme.lines[id].text};
`

const LineName = styled.h4`
  margin: 0;
  font-size: 1rem;
`

const LineStatus = styled.p`
  margin: 0;
  font-size: 0.9rem;
  text-align: right;
  font-family: 'DIN Extlight';
`

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

class TubeLineInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showExtendedLineStatus: false,
    }

    this.toggleShowExtendedLineStatus = this.toggleShowExtendedLineStatus.bind(this)
  }

  toggleShowExtendedLineStatus = () => this.setState(state => ({
    showExtendedLineStatus: !state.showExtendedLineStatus,
  }))

  render() {
    const { showExtendedLineStatus } = this.state
    const { line: { id, name, lineStatuses } } = this.props

    return (
      <LineContainer id={id}>
        <Summary onClick={this.toggleShowExtendedLineStatus}>
          <LineName>{name}</LineName>
          <LineStatus>
            {
              lineStatuses[0].statusSeverityDescription === 'Good Service'
                ? <FontAwesomeIcon icon={faCheck} />
                : lineStatuses
                  .map(status => status.statusSeverityDescription)
                  .filter((v, i, a) => a.indexOf(v) === i) // Unique strings only
                  .map(i => i.replace(' ', '\xa0')) // Prevent status messages getting split over lines
                  .join(', ')
            }
          </LineStatus>
        </Summary>
        {
          showExtendedLineStatus
            ? <TubeLineExtendedStatus lineStatuses={lineStatuses} toggleShowExtendedLineStatus={this.toggleShowExtendedLineStatus}/>
            : null
        }
      </LineContainer>
    )
  }
}

export default TubeLineInfo
