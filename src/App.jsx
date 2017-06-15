/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TubeStatus from './TubeStatus';
import Departures from './Departures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';

injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-5'>
              <TubeStatus />
            </div>
            <div className='col-lg-4'>
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
            <div className='col-lg-3'>
              <NextBus />
              <NationalRailStatus />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
