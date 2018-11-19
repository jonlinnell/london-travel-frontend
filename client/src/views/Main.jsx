import React from 'react'
import { Router, Location } from '@reach/router'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

import Navbar from '../components/Navbar'

import Home from './Home'
import Tube from './Tube'
import Bus from './Bus'
import NationalRail from './NationalRail'

const ViewMainContainer = styled.div`
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  min-height: 100vh;

  margin-bottom: ${({ theme: { navbar: { height, units } } }) => `${height + 12}${units}`};
`

const RouteContainer = posed(ContentWrapper)({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 },
})

const PosedRouter = ({ children }) => (
  <Location>
    {
      ({ location }) => (
        <PoseGroup>
          <RouteContainer key={location.key}>
            <Router location={location}>{ children }</Router>
          </RouteContainer>
        </PoseGroup>
      )
    }
  </Location>
)

const ViewMain = () => (
  <ViewMainContainer>
    <PosedRouter>
      <Home path="/" />
      <Tube path="/tube" />
      <NationalRail path="/rail" />
      <Bus path="/bus" />
    </PosedRouter>
    <Navbar />
  </ViewMainContainer>
)

export default ViewMain
