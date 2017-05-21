import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TubeStatus from './TubeStatus';
import SFADepartures from './SFADepartures';
import STPDepartures from './STPDepartures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';

import Footer from './Footer';

import './index.css';

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

render(<Footer />, document.getElementById('footer'));
