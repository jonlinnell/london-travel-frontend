import React, { Fragment } from 'react'
import { render } from 'react-dom'

import ViewMain from './views/Main'

import GlobalStyles from './styles/GlobalStyles'
import Normalize from './styles/Normalize'

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Normalize />
    <ViewMain />
  </Fragment>
)

render(<App />, document.getElementById('root'))
