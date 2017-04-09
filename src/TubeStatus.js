import React, { Component } from 'react';
import './TubeStatus.css';
import axios from 'axios';
import _ from 'lodash';
//import LineStatusIcon from './LineStatusIcon';
//import LineStatus from './LineStatus';

class TubeStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { 'tubedata' : [] };
  };
  componentWillMount() {
    let component = this;
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then( function(response) {
      component.setState({ 'tubedata' : response.data });
    })
    .catch( function(error) {
      console.log(error);
    });
  };
  render() {
    const lines = this.state.tubedata.map((line) =>
      <li>{line.name}</li>
    );
    return (
      <div><ul>{lines}</ul></div>
    );
  }
}

export default TubeStatus;
