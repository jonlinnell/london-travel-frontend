import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import LineStatus from './LineStatus';
import config from './config';

class NationalRailStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { 'railData' : [] };
  };
  componentWillMount() {
    let component = this;
    axios.get('https://api.tfl.gov.uk/line/mode/national-rail/status', {
      'params' : {
        'app_id' : config.tfl.app_id,
        'app_key' : config.tfl.app_key
      }
    })
    .then( function(response) {
      component.setState({ 'railData' : response.data });
    })
    .catch( function(error) {
      console.log(error);
    });
  };
  render() {
    const lines = this.state.railData.map((line) =>
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

export default NationalTubeStatus;