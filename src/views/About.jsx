import React from 'react'
import styled from 'styled-components'

import LogoImg from '../images/logo.png'

const ViewAboutWrapper = styled.div`
  margin: 2vh 12px 0 12px;
  height: 100vh;

  overflow-x: hidden;
`

const Logo = styled.img`
  width: 240px;
`

const About = () => (
  <ViewAboutWrapper>
    <Logo src={LogoImg} alt="Loughborough University London" />
    <h2>Travel</h2>
    <p>A app for making travel queries simple and straightforward.</p>
    <p>Please send any comments, suggestions, bug reports, and feedback to <a href="mailto:london-facilities@lboro.ac.uk">London Facilities</a>.</p>
    <p>Built by Jon Linnell, 2018.</p>
  </ViewAboutWrapper>
)

export default About
