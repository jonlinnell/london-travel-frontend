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

  & li a, & li a:visited {
    color: ${({ theme: { colours } }) => colours.asphalt};
  }
`

const NavbarItem = styled.li`
  display: inline-block;
  margin: 0 12px;

  padding-top: ${({ theme: { navbar: { height, units } } }) => `${height / 4}${units}`};
  padding-bottom: ${({ active }) => active ? 0 : '6px'};


  text-align: center;
  height: 100%;
  width: 100%;

  transition: border-width 0.3s ease-in-out;

  border-bottom: 3px solid ${({ theme: { colours } }) => colours.mulberry};
  border-width: ${({ active }) => active ? '100%' : 0};
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
            <NavbarItem active={location.pathname === '/'}>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </NavbarItem>
            <NavbarItem active={location.pathname === '/tube'}>
              <Link to="/tube">
                <FontAwesomeIcon icon={faSubway} />
              </Link>
            </NavbarItem>
            <NavbarItem active={location.pathname.match(/^\/rail/)}>
              <Link to="/rail">
                <FontAwesomeIcon icon={faTrain} />
              </Link>
            </NavbarItem>
            <NavbarItem active={location.pathname.match(/^\/bus/)}>
              <Link to="/bus">
                <FontAwesomeIcon icon={faBus} />
              </Link>
            </NavbarItem>
            <NavbarItem active={location.pathname === '/about'}>
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
