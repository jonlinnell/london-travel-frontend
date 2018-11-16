import React from 'react'
import { Link, Location } from '@reach/router'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faSubway,
  faTrain,
  faBus,
  faInfo,
} from '@fortawesome/free-solid-svg-icons'

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
  margin: 0 12px;

  content: "${({ to }) => to/* FOR TESTING ONLY */}";
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

const Navbar = () => (
  <StyledNavbar>
    <Location>
      {
        ({ location }) => (
          <NavbarItemList location={location}>
            <NavbarItem>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/tube">
                <FontAwesomeIcon icon={faSubway} />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/nationalrail">
                <FontAwesomeIcon icon={faTrain} />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/bus">
                <FontAwesomeIcon icon={faBus} />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/about">
                <FontAwesomeIcon icon={faInfo} />
              </Link>
            </NavbarItem>
          </NavbarItemList>
        )
      }
    </Location>
  </StyledNavbar>
)

export default Navbar
