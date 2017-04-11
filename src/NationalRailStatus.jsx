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

    var relevantLines = _.filter(this.state.railData, function(line) {
      return  line.id === 'c2c' ||
              line.id === 'east-midlands-trains' ||
              line.id === 'thameslink' ||
              line.id === 'southeastern' ||
              line.id === 'south-west-trains' ||
              line.id === 'great-northern';
    });

    const lines = relevantLines.map((line, i) =>
      <LineStatus key={i} line={line} />
    );

    return (
      <div className='card'>
        <div className='card-header titleheader'><h5>National Rail Status</h5></div>
        <div>{lines}</div>
      </div>
    );
  }
}

export default NationalRailStatus;