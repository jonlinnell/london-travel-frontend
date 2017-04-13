import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Spinner from 'react-spinjs';
import LineStatus from './LineStatus';
import config from './config';

class NationalRailStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'railData' : [],
      'loading' : true
    };
  };
  loadData() {
    let component = this;
    axios.get('https://api.tfl.gov.uk/line/mode/national-rail/status', {
      'params' : {
        'app_id' : config.tfl.app_id,
        'app_key' : config.tfl.app_key
      }
    })
    .then( function(response) {
      component.setState({
        'railData' : response.data,
        'loading' : false
      });
    })
    .catch( function(error) {
      console.log(error);
    });
  };
  componentDidMount() {
    this.loadData();
    this.timer = setInterval(() => {
      this.loadData();
    }, 240000);
  };
  componentWillUnmount() {
    clearInterval(this.timer);
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
      <ul className='list-group'>
        <li className='list-group-item'><h5 className="mb-0">National Rail Status</h5></li>
        {this.state.loading ? <li className="list-group-item flex-column py-5"><Spinner spinnerName='circle' /></li> : lines}
      </ul>
    );
  }
}

export default NationalRailStatus;