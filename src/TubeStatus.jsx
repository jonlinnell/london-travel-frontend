import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-spinjs';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import LineStatus from './LineStatus';
import config from './config';

class TubeStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tubeData: [],
      loading: true
    };
  }
  loadData() {
    let component = this; // eslint-disable-line prefer-const
    axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status', {
      params: {
        app_id: config.tfl.app_id,
        app_key: config.tfl.app_key
      }
    })
    .then((response) => {
      component.setState({
        tubeData: response.data,
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
    const lines = this.state.tubeData.map((line, i) =>
      <LineStatus key={i} line={line} />
    );
    return (
      <Paper>
        <List style={{ padding: 0 }}>
          <ListItem
            primaryText='Tube Status'
          />
        {this.state.loading ? <Spinner spinnerName='circle' /> : lines}
        </List>
      </Paper>
    );
  }
}

export default TubeStatus;
