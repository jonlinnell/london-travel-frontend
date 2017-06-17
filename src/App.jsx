/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ResponsiveNavigation from './ResponsiveNavigation';
import Homepage from './Homepage';
import About from './About';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#B70062'
  }
});

export default class App extends Component {
  constructor() {
    super();
    this.state = { selectedIndex: 0 };
    this.select = this.select.bind(this);
  }

  select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <Route path='/travel/about' component={About}/>
            <Route exact path='/travel/' component={Homepage}/>
            <Redirect to='/travel/' />
            <ResponsiveNavigation parent={this} />
            <div className='footer' />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
