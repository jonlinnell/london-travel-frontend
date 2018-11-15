import React from 'react'
import styled from 'styled-components'

import { supportContact } from '../../config/config.json'

const AppError = styled.div`
  width: ${({ fill }) => (fill ? '100%' : 'initial')};
  height: ${({ fill }) => (fill ? '100%' : 'initial')};

  background-color: rgba(255, 255, 255, 0.1);;
  padding: 24px;
`

const ErrorHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

const ErrorTitle = styled.h4`
  font-family: 'DIN Light';
  font-size: 24px;
  color: white;
  margin-left: 12px;
`

const ErrorMessage = styled.p`
  font-family: 'DIN Light';
  font-size: ${({ small }) => (small ? '12px' : '18px')};
  color: white;
`

const generateHumanReadableError = (error) => {
  if (!error.status) {
    return ('It\'s not possible to connect to the server at the moment.')
  }

  return ('That\'s about all we know.')
}

export default ({ error, callerDescription }) => (
  <AppError>
    <ErrorHeader>
      <ErrorTitle>
        There was a problem loading
        { callerDescription }
      </ErrorTitle>
    </ErrorHeader>
    {
      callerDescription
        ? <ErrorMessage>{ generateHumanReadableError(error) }</ErrorMessage>
        : null
    }
    {
      supportContact
        ? <ErrorMessage small>Please report this to { supportContact }.</ErrorMessage>
        : null
    }
  </AppError>
)
