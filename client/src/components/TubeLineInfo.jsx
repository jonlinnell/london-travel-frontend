import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const LineContainer = styled.div`
  padding: 12px;

  font-family: "DIN Light";

  background-color: ${({ id, theme }) => theme.lines[id].background};
  color: ${({ id, theme }) => theme.lines[id].text};

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
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

const TubeLineInfo = ({ line: { id, name, lineStatuses } }) => (
  <LineContainer id={id}>
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
  </LineContainer>
)

export default TubeLineInfo
