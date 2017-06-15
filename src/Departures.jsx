/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Darwin from 'national-rail-darwin';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Spinner from './Spinner';
import TrainDepartureInfo from './TrainDepartureInfo';
import TrainDepartureInfoLate from './TrainDepartureInfoLate';
import './Departures.css';

import config from './config';

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
      <Paper style={{ marginBottom: '1rem' }}>
        <List style={{ padding: 0 }}>
          <ListItem
            primaryText={this.state.title}
            secondaryText={this.state.subtitle}
            disabled={true}
          />
        {this.state.loading ? <li className='list-group-item flex-column py-5'><Spinner /></li> : departures}
        </List>
      </Paper>
    );
  }
}

export default Departures;
