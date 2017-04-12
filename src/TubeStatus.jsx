import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import LineStatus from './LineStatus';
import config from './config';

class TubeStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { 'tubeData' : [] };
  };
  componentDidMount() {
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
    const lines = this.state.tubeData.map((line, i) =>
      <LineStatus key={i} line={line} />
    );
    return (
      <ul className='list-group'>
        <li className='list-group-item'><h5 className="mb-0">Tube Status</h5></li>
        {lines}
      </ul>
    );
  }
}

export default TubeStatus;
