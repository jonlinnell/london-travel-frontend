import React, { Component } from 'react';
//import './SFADepartures.css';
import axios from 'axios';
import _ from 'lodash';
import config from './config';
import TrainDepartureInfo from './TrainDepartureInfo';
import TrainDepartureInfoLate from './TrainDepartureInfoLate';
import './Departures.css';

class SFADepartures extends Component {
  constructor(props) {
    super(props);
    this.state = { 'departureData' : [] };
  };
  componentWillMount() {
    let component = this;
    axios.get('http://transportapi.com/v3/uk/train/station/SFA/live.json', {
      'params' : {
        'app_key' : config.transportapi.app_key,
        'app_id' : config.transportapi.app_id,
        'type' : 'departure',
        'destination' : 'STP',
        'limit' : 5
      }
    })
    .then( function(response) {
      component.setState({ 'departureData' : response.data.departures.all });
    })
    .catch( function(error) {
      console.log(error);
    });
  };
  render() {
    var departures = [];
    this.state.departureData.map(function(departure) {
      if (departure.aimed_departure_time !== departure.expected_departure_time) {
        departures.push(<TrainDepartureInfoLate departure={departure} />);
      } else {
        departures.push(<TrainDepartureInfo departure={departure} />);
      }
    });
    return (
      <ul className='list-group'>
        <li className='list-group-item list-group-header'><h5>Stratford International Departures</h5></li>
        {departures}
      </ul>
    );
  }
}

export default SFADepartures;
