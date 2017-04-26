import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Import components
import TubeStatus from './TubeStatus';
import SFADepartures from './SFADepartures';
import STPDepartures from './STPDepartures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';

import ExtendedTubeStatus from './ExtendedTubeStatus';

// Import styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
class TravelSummary extends Component {
  render() {
    return(
      <div className="row my-2">
        <div className="col-lg-5">
          <TubeStatus />
        </div>
        <div className="col-lg-4">
          <SFADepartures />
          <STPDepartures />
        </div>
        <div className="col-lg-3">
          <NationalRailStatus />
          <NextBus />
        </div>
      </div>
    );
  }
}

class ExtendedTravelInfo extends Component {
  render() {
    return(
      <div>
        <ExtendedTubeStatus />
      </div>
    )
  }
}

class Events extends Component {
  render() {
    return(<h4>Working on it...</h4>)
  }
}

render(
  <BrowserRouter>
    <div className="container-fluid">
      <Route path="/travelsummary" component={TravelSummary} />
      <Route path="/extendedtravelinfo" component={ExtendedTravelInfo} />
      <Route path="/events" component={Events} />
      
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);