/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconHome from 'material-ui/svg-icons/action/home';
import IconInfo from 'material-ui/svg-icons/action/info';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Homepage from './Homepage';
import About from './About';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#b70062'
  }
});

const LinkStyle = {
  textAlign: 'center'
};

const BottomNavigationStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 1
};

export default class App extends Component {
  constructor() {
    super();
    this.state = { selectedIndex: 0 };
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
            <Paper zDepth={1}>
              <BottomNavigation
                selectedIndex={this.state.selectedIndex}
                style={BottomNavigationStyle}
              >
                <BottomNavigationItem
                  label='Home'
                  icon={<IconHome />}
                  onTouchTap={() => this.select(0)}
                  style={LinkStyle}
                  containerElement={<Link to='/travel/' />}
                />

                <BottomNavigationItem
                  label='About'
                  icon={<IconInfo />}
                  onTouchTap={() => this.select(1)}
                  style={LinkStyle}
                  containerElement={<Link to='/travel/about' />}
                />
              </BottomNavigation>
            </Paper>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
