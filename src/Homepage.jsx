/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect } from 'react-router-dom';
import IconRight from 'material-ui/svg-icons/navigation/arrow-forward';
import IconLeft from 'material-ui/svg-icons/navigation/arrow-back';
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import TubeStatus from './TubeStatus';
import Departures from './Departures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';

const LinkStyle = {
  textAlign: 'center'
};

const BottomNavigationStyle = {
  marginBottom: '2rem',
  clear: 'both'
};

class OriginLondon extends Component {
  render() {
    return (
      <div>
        <Departures
          title='Stratford Intl. Departures'
          subtitle='Trains to London St. Pancras'
          station='SFA'
          destination='STP'
        />
        <Departures
          title='London St. Pancras Departures'
          subtitle='Trains calling at Loughborough'
          station='STP'
          destination='LBO'
        />
      </div>
    );
  }
}

class OriginLboro extends Component {
  render() {
    return (
      <div>
        <Departures
          title='Loughborough Departures'
          subtitle='Trains to London St. Pancras'
          station='LBO'
          destination='STP'
        />
        <Departures
          title='London St. Pancras Departures'
          subtitle='Trains calling at Stratford International'
          station='STP'
          destination='SFA'
        />
      </div>
    );
  }
}

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = { selectedIndex: 0 };
  }

  selectOrigin = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5'>
            <TubeStatus />
          </div>
          <div className='col-lg-4'>
            <Router>
              <div>
                <Paper>
                  <ListItem
                    primaryText='Journey Selector'
                    secondaryText='Which journey are you taking today?'
                  />
                  <BottomNavigation
                    style={BottomNavigationStyle}
                    selectedIndex={this.state.selectedIndex}
                  >
                    <BottomNavigationItem
                      label='London to Lboro'
                      icon={<IconRight />}
                      onTouchTap={() => this.selectOrigin(0)}
                      style={LinkStyle}
                      containerElement={<Link to="/origin/london" />}
                    />
                    <BottomNavigationItem
                      label='Lboro to London'
                      icon={<IconLeft />}
                      onTouchTap={() => this.selectOrigin(1)}
                      style={LinkStyle}
                      containerElement={<Link to="/origin/lboro" />}
                    />
                  </BottomNavigation>
                </Paper>
                <Route path='/origin/lboro' component={OriginLboro} />
                <Route path='/origin/london' component={OriginLondon} />
                <Redirect to='/origin/london' />
              </div>
            </Router>
          </div>
          <div className='col-lg-3'>
            <NextBus />
            <NationalRailStatus />
          </div>
        </div>
      </div>
    );
  }
}
