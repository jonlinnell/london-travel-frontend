import React, { PureComponent } from 'react'
import styled from 'styled-components'

const NavbarItemList = styled.ul`
  list-style: none;
`

const NavbarItem = styled.li`
  display: inline-block;
`

const StyledNavbar = styled.div`
  width: 100%;
`

const StyledNavbarButton = styled.button`
  background: none;
  border: none;
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
