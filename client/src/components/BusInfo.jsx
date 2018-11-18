import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const BusInfo = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const BusDestination = styled.span`
  font-size: 1.3rem;
`

const BusService = styled.span`
  font-size: 1.3rem;
  margin-right: 6px;
`

const BusETA = styled.span`
  font-size: 1rem;
  margin-left: auto;
`

const PosedBusInfo = posed(BusInfo)({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
})

export default ({ bus: { destination, service, eta } }) => (
  <PosedBusInfo>
    <BusService>{ service }</BusService>
    <BusDestination>{ destination }</BusDestination>
    <BusETA>
      {
        eta === 0
          ? 'due'
          : `${eta} mins`
      }
    </BusETA>
  </PosedBusInfo>
)
