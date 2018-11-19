import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { Link } from '@reach/router'

import Header from '../components/Header'

import IconTfLRoundel from '../icons/TfLRoundel'
import IconNationalRail from '../icons/NationalRail'
import { faBus } from '@fortawesome/free-solid-svg-icons'

import MainBG from '../images/mainBG.png'

const HomeWrapper = styled.div`
  background: url(${MainBG}) repeat;
  padding: 12px; 

  min-height: calc(100vh - ${({ theme: { navbar: { height, units } } }) => `${height + 12}${units}`});
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: left;
`

const HomeButton = styled.li`
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;

  background-color: ${({ backgroundColour, theme: { colours } }) => colours[backgroundColour] || backgroundColour};
`

const StyledButtonList = styled.ul`
  list-style: none;
  padding: 0;
`

const Buttons = posed(StyledButtonList)({
  enter: {
    staggerChildren: 100
  },
  exit: { }
})

const PosedButton = posed(HomeButton)({
  enter: { y: 0, opacity: 1 },
  exit: { y: 60, opacity: 0 }
})

const Home = () => (
  <HomeWrapper>
    <Buttons initialPose="exit" pose="enter">
      <PosedButton backgroundColour="olympicGreen">
        <StyledLink to='/tube' >
          <Header
            title="Tube Status"
            subtitle="Current status of the London Underground."
            icon={IconTfLRoundel}
          />
          </StyledLink>
        </PosedButton>
      <PosedButton backgroundColour="merciaRedLight">
        <StyledLink to='/bus'>
          <Header
            title="Live Bus Times"
            subtitle="See live departures for any bus stop in London"
            icon={faBus}
            useFA
          />
          </StyledLink>
        </PosedButton>
      <PosedButton backgroundColour="petrolBlue">
        <StyledLink to='/rail'>
          <Header
            title="Train Departure Boards"
            subtitle="See all trains leaving a station in the next two hours."
            icon={IconNationalRail}
          />
        </StyledLink>
      </PosedButton>
    </Buttons>
  </HomeWrapper>
)

export default Home
