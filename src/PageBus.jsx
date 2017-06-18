import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import NextBus from './NextBus';

export default class PageBus extends Component {
  constructor() {
    super();
    const temp = [];

    [
      { label: 'HereEast (towards London)', code: 91432 },
      { label: 'HereEast (towards Stratford)', code: 91431 }
    ].map((stop, i) => {
      temp.push(<MenuItem key={i} value={stop.code} primaryText={stop.label} />);
      return null;
    });

    this.state = {
      TextFieldError: null,
      nearbyStops: temp
    };
  }

  handleSelectStop = (event, index, value) => {
    this.setState({ TextFieldError: null, stopCode: value });
  }

  handleCodeEntry = (event) => {
    const stopCode = event.target.value;
    const validationPattern = new RegExp('^[0-9]{5}$');
    if (!stopCode) {
      this.setState({
        stopCode: null,
        TextFieldError: null
      });
    } else if (validationPattern.test(stopCode)) {
      this.setState({
        stopCode,
        TextFieldError: null
      });
    } else {
      this.setState({ TextFieldError: 'Codes are five digits long, and contain only numbers.' });
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <Card style={{ marginBottom: '2rem' }}>
              <CardHeader
                title='Next buses'
                subtitle='Select from nearby stops, or enter the 5-digit code for a London bus stop to see the next buses to call there.'
              />
              <CardText>
                <SelectField
                  children={this.state.nearbyStops}
                  onChange={this.handleSelectStop}
                  floatingLabelText='Nearby bus stops'
                  fullWidth={true}
                />
                <TextField
                  floatingLabelText="Bus stop code"
                  errorText={this.state.TextFieldError}
                  onChange={this.handleCodeEntry}
                  fullWidth={true}
                />
              </CardText>
            </Card>
            { this.state.stopCode ? <NextBus stopCode={this.state.stopCode} /> : null }
          </div>
        </div>
      </div>
    );
  }
}
