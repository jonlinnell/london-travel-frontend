import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: -${({ theme: { navbar: { height, units } } }) => `${height}${units}`};

  position: relative;
  top: 100px;

  & > :nth-child(2) {
    top: -10px;
  }

  & > :nth-child(3) {
    top: -20px;
  }

  & > :nth-child(4) {
    top: -30px;
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(-360deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }

  @keyframes rotate2 {
    0% {
      transform: rotateZ(360deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
`

const Spinner = styled.div`
  margin: 0;
  padding: 0;

  position: absolute;
  border: 3px solid ${({ secondary }) => (secondary ? 'rgb(183, 0, 98)' : 'rgb(54, 17, 99)')};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: ${({ secondary }) => (secondary ? 'rotate' : 'rotate2')} 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
`

export default props => (
  <LoadingContainer {...props}>
    <Spinner size={200} />
    <Spinner size={220} secondary />
    <Spinner size={240} />
    <Spinner size={260} secondary />
  </LoadingContainer>
)
