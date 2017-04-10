import React from 'react';
import ReactDOM from 'react-dom';
import TubeStatus from './TubeStatus';
import SFADepartures from './SFADepartures';
import STPDepartures from './STPDepartures';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( <TubeStatus />, document.getElementById('TubeStatus') );
ReactDOM.render( <SFADepartures />, document.getElementById('SFADepartures') );
ReactDOM.render( <STPDepartures />, document.getElementById('STPDepartures') );
//ReactDOM.render( <NationalRailStatus />, document.getElementById('NationalRailStatus') );
//ReactDOM.render( <LocalStationStatus />, document.getElementById('LocalStationStatus') );

