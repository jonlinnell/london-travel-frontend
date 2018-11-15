import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'

import Navbar from '../components/Navbar'

const ViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 100vh;
`

const StyledParallax = styled(Parallax)`
  position: static !important;

`

const TestPage = ({ offset, children }) => (
  <ParallaxLayer offset={offset}>
    { children }
  </ParallaxLayer>
)

class ViewMain extends PureComponent {
  constructor(props) {
    super(props)

    this.parallaxContainerRef = React.createRef()

    this.state = {
      activePageIndex: 0,
    }

    this.setActivePageIndex = this.setActivePageIndex.bind(this)
  }

  setActivePageIndex = page => this.setState({
    activePageIndex: page,
  }, () => this.parallaxContainerRef.current.scrollTo(page))

  render() {
    const { activePageIndex } = this.state

    return (
      <ViewMainContainer>
        <StyledParallax ref={this.parallaxContainerRef} pages={4} horizontal scolling={false}>
          <TestPage offset={0}>Test 1</TestPage>
          <TestPage offset={1}>Test 2</TestPage>
          <TestPage offset={2}>Test 3</TestPage>
          <TestPage offset={3}>Test 4</TestPage>
        </StyledParallax>
        <Navbar setActivePageIndex={this.setActivePageIndex} activePageIndex={activePageIndex}/>
      </ViewMainContainer>
    )
  }
}

export default ViewMain
