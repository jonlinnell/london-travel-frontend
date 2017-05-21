import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Spinner from 'react-spinjs';
import NationalRailLineStatus from './NationalRailLineStatus';
import config from './config';

import c2c from '../public/img/logos/c2c.png';
import eastmidlandstrains from '../public/img/logos/east-midlands-trains.png';
import thameslink from '../public/img/logos/thameslink.png';
import southeastern from '../public/img/logos/southeastern.png';
import southwesttrains from '../public/img/logos/south-west-trains.png';
import greatnorthern from '../public/img/logos/great-northern.png';

const logos = {
  c2c,
  'east-midlands-trains': eastmidlandstrains,
  thameslink,
  southeastern,
  'south-west-trains': southwesttrains,
  'great-northern': greatnorthern
};

class NationalRailStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      railData: [],
      loading: true
    };
  }
  loadData() {
    let component = this; // eslint-disable-line prefer-const
    axios.get('https://api.tfl.gov.uk/line/mode/national-rail/status', {
      params: {
        app_id: config.tfl.app_id,
        app_key: config.tfl.app_key
      }
    })
    .then((response) => {
      component.setState({
        railData: response.data,
        loading: false
      });
    })
    .catch((error) => {
      console.log(error); // eslint-disable-line no-console
    });
  }
  componentDidMount() {
    this.loadData();
    this.timer = setInterval(() => {
      this.loadData();
    }, 240000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() { // eslint-disable-next-line arrow-body-style
    const relevantLines = _.filter(this.state.railData, (line) => {
      return (line.id === 'c2c' || line.id === 'east-midlands-trains' || line.id === 'thameslink' || line.id === 'southeastern' || line.id === 'south-west-trains' || line.id === 'great-northern');
    });

    const lines = relevantLines.map((line, i) =>
      <NationalRailLineStatus key={i} line={line} logo={logos[line.id]} />
    );
    return (
      <ul className='list-group paper'>
        <li className='list-group-item section-header'>
          <h5 className="mb-0 section-header-text">National Rail Status</h5>
          <span className='text-muted subheader'>Advisory only. See train operators' websites for more information.</span>
        </li>
        {this.state.loading ? <li className="list-group-item flex-column py-5"><Spinner spinnerName='circle' /></li> : lines}
      </ul>
    );
  }
}

export default NationalRailStatus;
