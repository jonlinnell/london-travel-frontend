import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

export default ({ children }) => (
  <StyledRow>
    { children }
  </StyledRow>
)
