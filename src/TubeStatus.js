import React, { Component } from 'react';
import './TubeStatus.css';
import axios from 'axios';
import _ from 'lodash';
import LineStatus from './LineStatus';

class TubeStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { 'tubedata' : [] };
  };
  componentWillMount() {
    let component = this;
    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status')
    .then( function(response) {
      component.setState({ 'tubedata' : response.data });
    })
    .catch( function(error) {
      console.log(error);
    });
  };
  render() {
    const lines = this.state.tubedata.map((line) =>
      <LineStatus line={line} />
    );
    return (
      <div className='card'>
        <div className='card-header titleheader'><h4>Tube Status</h4></div>
        <div>{lines}</div>
      </div>
    );
  }
}

export default TubeStatus;
