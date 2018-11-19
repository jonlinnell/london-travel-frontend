import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon }) => icon()

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: content;

  margin-bottom: 12px;

  & svg {
    width: ${({ width }) => width || '32px'};

    margin-left: auto;

    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
    stroke: rgb(255, 255, 255);

    flex-shrink: 0;
  }
`

const Title = styled.h2`
  font-size: 1.2rem;
  color: white;
  margin: 0;
`

const Subtitle = styled.p`
  margin: 0;
  color: rgb(255, 255, 255);
`

export default ({
  icon,
  title,
  subtitle,
  useFA
}) => {
  return (
    <div>
      <HeaderWrapper>
        <Title>{ title }</Title>
        {
          useFA
            ? (
              <FontAwesomeIcon icon={icon} />
            )
            : <Icon icon={icon} /> 
        }
      </HeaderWrapper>
      <Subtitle>{ subtitle }</Subtitle>
    </div>
  )
}
