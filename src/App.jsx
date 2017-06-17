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
import PageHome from './PageHome';
import PageNationalRail from './PageNationalRail';
import PageAbout from './PageAbout';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#B70062',
    canvasColor: '#fffcfd'
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
            <Route exact path='/travel/' component={PageHome}/>
            <Route path='/travel/nationalrail/' component={PageNationalRail}/>
            <Route path='/travel/about/' component={PageAbout}/>
            <Redirect to='/travel/' />
            <ResponsiveNavigation parent={this} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
