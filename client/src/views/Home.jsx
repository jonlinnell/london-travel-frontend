import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { Link } from '@reach/router'

const HomeWrapper = styled.div`
  background-color: white;
  padding: 12px; 
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

const TitlePair = styled.div`
  
`

const Title = styled.h3`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 6px;
`

const Subtitle = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
`

const ButtonIcon = styled.div`
  margin-left: auto;
  height: 100%;
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
          <TitlePair>
            <Title>Tube Status</Title>
            <Subtitle>Touch here for service information.</Subtitle>
          </TitlePair>
          <ButtonIcon>
            Something
          </ButtonIcon>
          </StyledLink>
        </PosedButton>
      <PosedButton backgroundColour="merciaRedLight">
        <StyledLink to='/bus'>
          <TitlePair>
            <Title>Buses</Title>
            <Subtitle>See live departure information for London bus stops.</Subtitle>
          </TitlePair>
          <ButtonIcon>
            Something
          </ButtonIcon>
          </StyledLink>
        </PosedButton>
      <PosedButton backgroundColour="petrolBlue">
        <StyledLink to='/rail'>
          <TitlePair>
            <Title>Train Departures</Title>
            <Subtitle>See all trains leaving a station in the next two hours.</Subtitle>
          </TitlePair>
          <ButtonIcon>
            Something
          </ButtonIcon>
        </StyledLink>
      </PosedButton>
    </Buttons>
  </HomeWrapper>
)

export default Home
