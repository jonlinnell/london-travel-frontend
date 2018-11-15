import React from 'react'
import qh from 'quick-hash'
import styled from 'styled-components'

const LineStatusList = styled.ul`
  list-style: none;

  padding: 12px;
  margin: 12px -10px 0 -10px;

  background-color: rgb(255, 255, 255);

  color: rgb(0, 0, 0);

  & > :last-child p {
    margin-bottom: 12px;
  }
`

const LineStatusTitle = styled.h3`
  margin: 0;
  margin-bottom: 6px;
  font-size: 1.2rem;
`

const LineStatusDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
`

export default ({ lineStatuses, toggleShowExtendedLineStatus }) => (
  <LineStatusList onClick={toggleShowExtendedLineStatus}>
    {
      lineStatuses.map((status, i) => (
        <li key={i}>
          <LineStatusTitle>{ status.statusSeverityDescription }</LineStatusTitle>
          <LineStatusDescription>{ status.reason }</LineStatusDescription>
        </li>
      ))
    }
  </LineStatusList>
)
