/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TubeStatus from './TubeStatus';
import SFADepartures from './SFADepartures';
import STPDepartures from './STPDepartures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';

import './index.css';

// Pages
class TravelSummary extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-5'>
          <TubeStatus />
        </div>
        <div className='col-lg-4'>
          <SFADepartures />
          <STPDepartures />
        </div>
        <div className='col-lg-3'>
          <NationalRailStatus />
          <NextBus />
        </div>
      </div>
    );
  }
}

class Events extends Component {
  render() {
    return (<h4>Working on it...</h4>);
  }
}

render(
  <BrowserRouter>
    <div className='container-fluid'>
      <Route path='/travel' component={TravelSummary} />
      <Route path='/events' component={Events} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
