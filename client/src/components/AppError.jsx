import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import { supportContact } from '../../config/config.json'

const AppError = styled.div`
  width: ${({ fill }) => (fill ? '100%' : 'initial')};
  height: ${({ fill }) => (fill ? '100%' : 'initial')};

  background-color: rgba(0, 0, 0, 0.1);;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: ${({ contained }) => (contained ? '12px' : 'initial')};
  border-radius: ${({ contained, theme: { radius } }) => (contained ? radius : 0)};
`

const ErrorTitle = styled.h4`
  font-family: 'DIN Light';
  font-size: 24px;
  color: black;

  width: 80%;
  text-align: center;
`

const ErrorMessage = styled.p`
  font-family: 'DIN Light';
  font-size: ${({ small }) => (small ? '12px' : '18px')};
  color: black;
  text-align: center;

  margin-top: 0;
`

const generateHumanReadableError = (error) => {
  if (!error.status) {
    return ('It\'s not possible to connect to the server at the moment.')
  }

  return ('That\'s about all we know.')
}

export default ({ error, description, ...rest }) => (
  <AppError {...rest}>
    <FontAwesomeIcon icon={faExclamationTriangle} size="4x" />
    <ErrorTitle>
      There was a problem
      {
        description
          ? (` ${description}.`)
          : '.'
      }
    </ErrorTitle>
    {
      error
        ? <ErrorMessage>{ generateHumanReadableError(error) }</ErrorMessage>
        : null
    }
    {
      supportContact
        ? (
          <ErrorMessage small>
            Please report this to&nbsp;
            { supportContact }
            &nbsp;.
          </ErrorMessage>
        )
        : null
    }
  </AppError>
)
