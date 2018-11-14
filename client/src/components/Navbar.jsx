import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
  position: relative;
  top: 70%;
  height: 128px;
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
        <ul>
          <li>
            <button type="button" onClick={() => setActivePageIndex(0)}>Page 1</button>
          </li>
          <li>
            <button type="button" onClick={() => setActivePageIndex(1)}>Page 2</button>
          </li>
          <li>
            <button type="button" onClick={() => setActivePageIndex(2)}>Page 3</button>
          </li>
          <li>
            <button type="button" onClick={() => setActivePageIndex(3)}>Page 4</button>
          </li>
        </ul>
        <pre>
          Current:
          { this.state.activePageIndex }
        </pre>
      </StyledNavbar>
    )
  }
}

export default Navbar
