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
import IconStar from 'material-ui/svg-icons/action/stars';
import IconInfo from 'material-ui/svg-icons/action/info';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Homepage from './Homepage';

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

class Test extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5'>
            <Paper>test</Paper>
          </div>
        </div>
      </div>
    );
  }
}

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
            <Route path="/about" component={Test}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect to="/" />
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
                  containerElement={<Link to="/" />}
                />

                <BottomNavigationItem
                  label='Favourites'
                  icon={<IconStar />}
                  onTouchTap={() => this.select(1)}
                  style={LinkStyle}
                  containerElement={<Link to="/" />}
                />

                <BottomNavigationItem
                  label='About'
                  icon={<IconInfo />}
                  onTouchTap={() => this.select(2)}
                  style={LinkStyle}
                  containerElement={<Link to="/about" />}
                />
              </BottomNavigation>
            </Paper>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
