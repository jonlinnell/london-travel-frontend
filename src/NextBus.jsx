import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui';
import Spinner from './Spinner';
import NextBusInfo from './NextBusInfo';
import config from './config';

export default class NextBus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busData: [],
      loading: true
    };
  }
  loadData() {
    let component = this; // eslint-disable-line prefer-const
    axios.get('http://countdown.api.tfl.gov.uk/interfaces/ura/instant_V1', {
      params: {
        StopCode1: config.busStopCode,
        ReturnList: 'EstimatedTime,LineID,DestinationName,StopPointName'
      }
    })
    .then((response) => {
      const formattedData = JSON.parse(`[${response.data.replace(/]/g, '],').replace(/\],$/, ']').toString()}]`);
      component.setState({
        busData: formattedData,
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
    }, 40000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const buses = _.sortBy(this.state.busData, i => i[4]).map((bus, i) =>
      <NextBusInfo bus={bus} key={i} />
    );
    return (
      <Paper className='hoc'>
        <List style={{ padding: 0 }}>
          <ListItem
            primaryText='388 Buses from HereEast'
            disabled={true}
          />
          {this.state.loading ? <Spinner /> : buses}
          <ListItem
            style={{ backgroundColor: '#EEE', fontSize: '0.7rem' }}
            primaryText='powered by TfL Open Data'
            disabled={true}
          />
        </List>
      </Paper>
    );
  }
}
