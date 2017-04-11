import React from 'react';
import ReactDOM from 'react-dom';
import TubeStatus from './TubeStatus';
import SFADepartures from './SFADepartures';
import STPDepartures from './STPDepartures';
import NationalRailStatus from './NationalRailStatus';
import NextBus from './NextBus';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( <TubeStatus />, document.getElementById('TubeStatus') );
ReactDOM.render( <SFADepartures />, document.getElementById('SFADepartures') );
ReactDOM.render( <STPDepartures />, document.getElementById('STPDepartures') );
ReactDOM.render( <NationalRailStatus />, document.getElementById('NationalRailStatus') );
ReactDOM.render( <NextBus />, document.getElementById('NextBus') );
//ReactDOM.render( <LocalStationStatus />, document.getElementById('LocalStationStatus') );
//ReactDOM.render( <LocalBikesStatus />, document.getElementById('LocalBikesStatus') );