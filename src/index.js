/* eslint-disable class-methods-use-this */
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TubeStatus from './TubeStatus';
import SFADepartures from './SFADepartures';
import STPDepartures from './STPDepartures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';

import './index.css';
import '../public/img/logo.png';

render(
  <div className='container-fluid'>
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
  </div>,
  document.getElementById('root')
);
