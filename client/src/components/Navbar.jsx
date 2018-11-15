import React, { PureComponent } from 'react'
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
            <button type="button" onClick={() => setActivePageIndex(0)}>Page 1</button>
          </NavbarItem>
          <NavbarItem>
            <button type="button" onClick={() => setActivePageIndex(1)}>Page 2</button>
          </NavbarItem>
          <NavbarItem>
            <button type="button" onClick={() => setActivePageIndex(2)}>Page 3</button>
          </NavbarItem>
          <NavbarItem>
            <button type="button" onClick={() => setActivePageIndex(3)}>Page 4</button>
          </NavbarItem>
        </NavbarItemList>
      </StyledNavbar>
    )
  }
}

export default Navbar
