import React, { PureComponent } from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const NavbarItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: ${({ theme: { navbar: { height, units } } }) => `${height}${units}`};
`

const NavbarItem = styled.li`
  display: inline-block;
  margin: 0;
`

const StyledNavbar = styled.div`
  width: 100%;
  height: ${({ theme: { navbar: { height, units } } }) => `${height}${units}`};
  margin-top: auto;

  background-color: white;

  position: fixed;
  bottom: 0;

  z-index: 1;
`

class Navbar extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activePageIndex: props.activePageIndex,
    }
  }

  render() {
    const { setActivePageIndex } = this.props

    return (
      <StyledNavbar>
        <NavbarItemList>
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/tube">Tube</Link>
          </NavbarItem>
        </NavbarItemList>
      </StyledNavbar>
    )
  }
}

export default Navbar
