import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon }) => icon()

const HeaderWrapper = styled.div`
  background-color: ${({ backgroundColour, theme: { colours } }) => colours[backgroundColour] || backgroundColour};
  margin: ${({ topFill }) => topFill ? '-12px' : 0 };
  padding: ${({ topFill }) => topFill ? '12px' : '6px' };

  width: ${({ topFill }) => topFill ? null : '100%' };

  margin-bottom: 12px;
`

const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: content;

  & svg {
    width: ${({ small }) => small ? '1rem' : '2rem'};
    font-size: ${({ small }) => small ? '1rem' : '2rem'};

    margin-left: auto;

    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
    stroke: rgb(255, 255, 255);

    flex-shrink: 0;
  }
`

const Title = styled.h2`
  font-size: ${({ small }) => small ? '0.8rem' : '1.2rem'};
  color: white;
  margin: 0;

  margin-bottom: ${({ small }) => small ? '6px' : '12px'};
`

const Subtitle = styled.p`
  margin: 0;
  color: rgb(255, 255, 255);
`

export default ({
  icon,
  title,
  subtitle,
  useFA,
  backgroundColour,
  topFill,
  width,
  small,
}) => {
  let iconElement

  if (useFA && icon) {
    iconElement = <FontAwesomeIcon icon={icon} />
  } else if (icon) {
    iconElement = <Icon icon={icon} />
  } else {
    iconElement = null
  }

  return (
    <HeaderWrapper topFill={topFill} backgroundColour={backgroundColour}>
      <HeaderTitleWrapper small={small}>
        <Title>{ title }</Title>
        { iconElement }
      </HeaderTitleWrapper>
      <Subtitle>{ subtitle }</Subtitle>
    </HeaderWrapper>
  )
}
