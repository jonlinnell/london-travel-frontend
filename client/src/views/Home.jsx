import React, { Fragment } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { Link } from '@reach/router'

import { faBus, faLink } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import VerticalSpacer from '../components/VerticalSpacer'

import IconTfLRoundel from '../icons/TfLRoundel'
import IconNationalRail from '../icons/NationalRail'

import MainBG from '../images/mainBG.png'
import CampusPhoto from '../images/campus.jpg'

import { getSavedCookieConsent, saveCookieConsent } from '../lib/storage'

const HomeWrapper = styled.div`
  background: url(${MainBG}) repeat;
  padding: 12px; 
  margin-top: 0;

  min-height: 100vh;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledExternalLink = styled.a`
  text-decoration: none;
`

const HomeButton = styled.li`
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 4px;

  background: url(${({ backgroundImage }) => backgroundImage}) center no-repeat;
  background-size: cover;
  background-color: ${({ backgroundColour, theme: { colours } }) => colours[backgroundColour] || backgroundColour};
`

const StyledButtonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Buttons = posed(StyledButtonList)({
  enter: {
    opacity: 1, staggerChildren: 60,
  },
  exit: { opacity: 0 },
})

const PosedButton = posed(HomeButton)({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
})

const Home = () => {
  setTimeout(() => saveCookieConsent(), 3000)

  return (
    <HomeWrapper>
      <Buttons initialPose="exit" pose="enter">
        <PosedButton backgroundImage={CampusPhoto}>
          <StyledExternalLink href="https://www.lborolondon.ac.uk/" target="_blank">
            <Header
              title="Loughborough University London"
              subtitle="Click here to visit our website."
              icon={faLink}
              useFA
            />
          </StyledExternalLink>
        </PosedButton>
        {
          !getSavedCookieConsent() && (
            <Fragment>
              <VerticalSpacer size={12} />
              <PosedButton backgroundColour="mulberryLight">
                <p>This app uses cookies (and other similar stuff) to work better for you.</p>
                <p>By staying on this site, you agree to this.</p>
              </PosedButton>
            </Fragment>
          )
        }
        <VerticalSpacer size={12} />
        <PosedButton backgroundColour="olympicGreen">
          <StyledLink to="/tube">
            <Header
              title="Tube Status"
              subtitle="Current status of the London Underground."
              icon={IconTfLRoundel}
            />
          </StyledLink>
        </PosedButton>
        <PosedButton backgroundColour="merciaRedLight">
          <StyledLink to="/bus">
            <Header
              title="Live Bus Times"
              subtitle="See live departures for any bus stop in London."
              icon={faBus}
              useFA
            />
          </StyledLink>
        </PosedButton>
        <PosedButton backgroundColour="petrolBlue">
          <StyledLink to="/rail">
            <Header
              title="Train Departure Boards"
              subtitle="See all trains leaving a station in the next two hours."
              icon={IconNationalRail}
            />
          </StyledLink>
        </PosedButton>
        <VerticalSpacer size={24} />
        <PosedButton backgroundColour="bus">
          <StyledLink to="/bus/91431,91432">
            <Header
              title="HereEast (388)"
              subtitle="London buses arriving soon outside campus."
            />
          </StyledLink>
        </PosedButton>
        <PosedButton backgroundColour="overground">
          <StyledLink to="/rail/HKW">
            <Header
              title="Hackney Wick"
              subtitle="Check the next London Overground trains."
              icon={IconTfLRoundel}
            />
          </StyledLink>
        </PosedButton>
        <PosedButton backgroundColour="petrolBlueLight">
          <StyledLink to="/rail/SFA">
            <Header
              title="Stratford International"
              subtitle="Check the next Southeastern High Speed services."
              icon={IconNationalRail}
            />
          </StyledLink>
        </PosedButton>
      </Buttons>
    </HomeWrapper>
  )
}

export default Home
