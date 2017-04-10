import React, { Component } from 'react';
import './TubeStatus.css';
import axios from 'axios';
import _ from 'lodash';
import LineStatus from './LineStatus';
import config from './config';

class TubeStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { 'tubeData' : [] };
  };
  componentWillMount() {
    let component = this;
    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', {
      'params' : {
        'app_id' : config.tfl.app_id,
        'app_key' : config.tfl.app_key
      }
    })
    .then( function(response) {
      component.setState({ 'tubeData' : response.data });
    })
    .catch( function(error) {
      console.log(error);
    });
  };
  render() {
    const lines = this.state.tubeData.map((line) =>
      <LineStatus line={line} />
    );
    return (
      <div className='card'>
        <div className='card-header titleheader'><h5>Tube Status</h5></div>
        <div>{lines}</div>
      </div>
    );
  }
}

export default TubeStatus;
