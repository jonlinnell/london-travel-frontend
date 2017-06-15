/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import TubeStatus from './TubeStatus';
import Departures from './Departures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';

export default class Homepage extends Component {
  render() {
    return (
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
    );
  }
}
