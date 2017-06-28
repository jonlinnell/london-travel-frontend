/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect } from 'react-router-dom';
import IconUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import IconDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import TubeStatus from '../components/TubeStatus';
import Departures from '../components/NationalRailDepartures';
import NationalRailStatus from '../components/NationalRailStatus';
import NextBus from '../components/NextBus';

const LinkStyle = {
  textAlign: 'center'
};

const OriginSelectorStyle = {
  marginBottom: '1rem',
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
          <div className='col-md-5 col-lg-3 offset-lg-1'>
            <TubeStatus />
          </div>
          <div className='col-md-4'>
            <Router>
              <div>
                <Paper>
                  <ListItem
                    primaryText='Journey Selector'
                    secondaryText='Which journey are you taking today?'
                    disabled={true}
                  />
                  <BottomNavigation
                    style={OriginSelectorStyle}
                    selectedIndex={this.state.selectedIndex}
                  >
                    <BottomNavigationItem
                      label='London to Lboro'
                      icon={<IconUp />}
                      onTouchTap={() => this.selectOrigin(0)}
                      style={LinkStyle}
                      containerElement={<Link to='/travel/origin/london' />}
                    />
                    <BottomNavigationItem
                      label='Lboro to London'
                      icon={<IconDown />}
                      onTouchTap={() => this.selectOrigin(1)}
                      style={LinkStyle}
                      containerElement={<Link to='/travel/origin/lboro' />}
                    />
                  </BottomNavigation>
                </Paper>
                <Route path='/travel/origin/lboro' component={OriginLboro} />
                <Route path='/travel/origin/london' component={OriginLondon} />
                <Redirect to='/travel/origin/london' />
              </div>
            </Router>
          </div>
          <div className='col-md-3 col-lg-3 col-xl-3'>
            <NextBus
              title='HereEast'
              stopCode='91431,91432'
            />
            <NationalRailStatus />
          </div>
        </div>
      </div>
    );
  }
}
