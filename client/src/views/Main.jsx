import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'

import Navbar from '../components/Navbar'

import Tube from './Tube'

const ViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;

  height: 100vh;
`

const StyledParallax = styled(Parallax)`
  position: static !important;
`

const StyledParallaxLayer = styled(ParallaxLayer)`
  height: 100vh;
  overflow: scroll;
`

const Page = ({ Component, childProps, ...rest }) => (
  <StyledParallaxLayer speed={3} {...rest}>
    <Component {...childProps} />
  </StyledParallaxLayer>
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
        <StyledParallax ref={this.parallaxContainerRef} pages={2} horizontal scrolling={false}>
          <Page offset={0} Component={Tube} />

        </StyledParallax>
        <Navbar setActivePageIndex={this.setActivePageIndex} activePageIndex={activePageIndex} />
      </ViewMainContainer>
    )
  }
}

export default ViewMain
