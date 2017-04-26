import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Spinner from 'react-spinjs';
import ExtendedLineStatus from './ExtendedLineStatus';
import config from './config';

class ExtendedTubeStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'tubeData' : [],
      'loading' : true
    };
  };
  loadData() {
    let component = this;
    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', {
      'params' : {
        'app_id' : config.tfl.app_id,
        'app_key' : config.tfl.app_key
      }
    })
    .then( function(response) {
      component.setState({
        'tubeData' : response.data,
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
    }, 120000);
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const lines = this.state.tubeData.map((line, i) =>
      <ExtendedLineStatus key={i} line={line} />
    );
    return (
      <ul className='list-group row paper'>
        <li className='list-group-item'>
          <h5 className="mb-0 section-header-text col-lg-12">Tube Status</h5>
        </li>
        {this.state.loading ? <li className="list-group-item flex-column py-5"><Spinner spinnerName='circle' /></li> : lines}
      </ul>
    );
  }
}

export default ExtendedTubeStatus;
