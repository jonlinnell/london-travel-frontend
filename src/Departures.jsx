/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Darwin from 'national-rail-darwin';
import Spinner from 'react-spinjs';
import config from './config';
import TrainDepartureInfo from './TrainDepartureInfo';
import TrainDepartureInfoLate from './TrainDepartureInfoLate';
import './Departures.css';

const rail = new Darwin(config.darwinApiKey);

class Departures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureData: [],
      loading: true,
      title: this.props.title,
      subtitle: this.props.subtitle,
      station: this.props.station,
      destination: this.props.destination
    };
  }
  loadData() {
    const component = this;
    rail.getDepartureBoard(this.state.station, {
      rows: 5,
      destination: this.state.destination
    }, (err, response) => {
      if (err) { throw err; }
      component.setState({
        departureData: response.trainServices,
        loading: false
      });
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
    const departures = [];
    this.state.departureData.map((departure, i) => {
      if (departure.etd !== 'On time') {
        departures.push(<TrainDepartureInfoLate key={i} departure={departure} />);
      } else {
        departures.push(<TrainDepartureInfo key={i} departure={departure} />);
      }
    });
    return (
      <ul className='list-group paper'>
        <li className='list-group-item section-header'>
          <div className='d-flex w-100 justify-content-between mb-0'>
            <h5 className='mb-0 section-header-text'>{this.state.title}</h5>
          </div>
          <span className='text-muted subheader'>{this.state.subtitle}</span>
        </li>
        {this.state.loading ? <li className='list-group-item flex-column py-5'><Spinner /></li> : departures}
      </ul>
    );
  }
}

export default Departures;
