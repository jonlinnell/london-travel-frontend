import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import NextBusInfo from './NextBusInfo';
import config from './config';

class NextBus extends Component {
  constructor(props) {
    super(props);
    this.state = { 'busData' : [] };
  };
  componentDidMount() {
    let component = this;
    axios.get('http://countdown.api.tfl.gov.uk/interfaces/ura/instant_V1', {
      'params' : {
        'StopCode1' : config.busStopCode,
        'ReturnList' : 'EstimatedTime,LineID,DestinationName,StopPointName'
      }
    })
    .then(function(response) {

      var formattedData = JSON.parse("[" + response.data.replace(/]/g, "],").replace(/\],$/, "]").toString() + "]");
      component.setState({ 'busData' : formattedData });
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  render() {
    const buses = _.sortBy(this.state.busData, function(i) { return i[4]; }).map(function(bus, i) {
      return <NextBusInfo bus={bus} key={i} />
    });
    return (
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-0">388 Buses from HereEast</h5>
          </div>
        </a>
        {buses}
        <li className='list-group-item acknowledgment'>
          <small className='acknowledgment'>Powered by TfL Open Data</small>
        </li>
      </div>
    );
  }
}

export default NextBus;
