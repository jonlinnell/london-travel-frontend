import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui';
import Spinner from './Spinner';
import NextBusInfo from './NextBusInfo';

export default class NextBus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busData: [],
      error: false,
      loading: true
    };
  }
  loadData() {
    let component = this; // eslint-disable-line prefer-const
    axios.get('http://countdown.api.tfl.gov.uk/interfaces/ura/instant_V1', {
      params: {
        StopCode1: this.props.stopCode,
        ReturnList: 'EstimatedTime,LineID,DestinationName,StopPointName'
      }
    })
    .then((response) => {
      component.setState({
        busData: JSON.parse(`[${response.data.replace(/]/g, '],').replace(/\],$/, ']').toString()}]`),
        loading: false
      });
    })
    .catch(() => {
      this.setState({ error: true });
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
            primaryText={this.props.title}
            secondaryText={this.props.subtitle || 'Next buses calling at this stop'}
            disabled={true}
          />
          {this.state.loading ? <Spinner error={this.state.error} /> : buses}
        </List>
      </Paper>
    );
  }
}
