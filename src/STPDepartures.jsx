/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinjs';
import config from './config';
import TrainDepartureInfo from './TrainDepartureInfo';
import TrainDepartureInfoLate from './TrainDepartureInfoLate';
import './Departures.css';

class SFADepartures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureData: [],
      loading: true
    };
  }
  loadData() {
    let component = this; // eslint-disable-line prefer-const
    axios.get('http://transportapi.com/v3/uk/train/station/STP/live.json', {
      params: {
        app_key: config.transportapi.app_key,
        app_id: config.transportapi.app_id,
        type: 'departure',
        calling_at: 'LBO',
        limit: 5
      }
    })
    .then((response) => {
      component.setState({
        departureData: response.data.departures.all,
        loading: false
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  componentDidMount() {
    this.loadData();
    this.timer = setInterval(() => {
      this.loadData();
    }, 120000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    let departures = []; // eslint-disable-line prefer-const
    this.state.departureData.map((departure, i) => {
      if (departure.aimed_departure_time !== departure.expected_departure_time) {
        departures.push(<TrainDepartureInfoLate key={i} departure={departure} />);
      } else {
        departures.push(<TrainDepartureInfo key={i} departure={departure} />);
      }
    });
    return (
      <ul className='list-group paper'>
        <li className='list-group-item section-header'>
          <div className='d-flex w-100 justify-content-between mb-0'>
            <h5 className='mb-0 section-header-text'>London St. Pancras Departures</h5>
          </div>
          <span className='text-muted subheader'>Trains calling at Loughborough</span>
        </li>
        {this.state.loading ? <li className='list-group-item flex-column py-5'><Spinner /></li> : departures}
      </ul>
    );
  }
}

export default SFADepartures;
