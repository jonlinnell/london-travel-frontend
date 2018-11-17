import React from 'react'
import { Router, Location } from '@reach/router'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

import Navbar from '../components/Navbar'

import Tube from './Tube'
import Loading from '../components/Loading'

const ViewMainContainer = styled.div`
  height: 100vh;
`

const ContentWrapper = styled.div`
  min-height: 100%;
  margin-bottom: ${({ theme: { navbar: { height, units } } }) => `${height + 12}${units}`};
`

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 },
})

const Home = () => (
  <div>
    test
  </div>
)

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
    <ContentWrapper>
      <PosedRouter>
        <Home path="/" />
        <Tube path="/tube" />
        <Loading path="/nationalrail" />
      </PosedRouter>
    </ContentWrapper>
    <Navbar />
  </ViewMainContainer>
)

export default ViewMain
