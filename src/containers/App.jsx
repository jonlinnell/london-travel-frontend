/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  Router,
  Route,
  Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactGA from 'react-ga';
import ResponsiveNavigation from '../components/ResponsiveNavigation';
import PageHome from './Home';
import PageNationalRail from './NationalRail';
import PageAbout from './About';
import PageBus from './Bus';

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

  componentWillMount = () => {
    ReactGA.set({ page: "/" });
    ReactGA.pageview("/");
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router className='sitesContainer' history={this.props.history}>
          <div style={{ flex: 1 }}>
            <Route exact path='/travel/' component={PageHome}/>
            <Route path='/travel/nationalrail/' component={PageNationalRail}/>
            <Route path='/travel/bus/' component={PageBus}/>
            <Route path='/travel/about/' component={PageAbout}/>
            <Redirect to='/travel/' />
            <footer />
            <ResponsiveNavigation parent={this} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
