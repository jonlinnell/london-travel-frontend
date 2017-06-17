import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';

import Departures from './Departures';

import stations from './NRStations';

const stationsConfig = {
  text: 'name',
  value: 'code'
};

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      departure: null,
      callingAt: null
    };
  }

  handleChangeDeparture = (station) => {
    this.setState({ departure: station });
  }

  handleChangeCallingAt = (station) => {
    this.setState({ callingAt: station });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <Card className='hoc'>
              <CardHeader
                title="National Rail Departures"
                subtitle="Search for a station, then enter a destination to show only trains that stop at that station."
              />
              <CardText>
                <AutoComplete
                  floatingLabelText="Departing from"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={stations}
                  dataSourceConfig={stationsConfig}
                  maxSearchResults={20}
                  fullWidth={true}
                  onNewRequest={this.handleChangeDeparture}
                />
                <AutoComplete
                  floatingLabelText="Calling at (optional)"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={stations}
                  dataSourceConfig={stationsConfig}
                  maxSearchResults={5}
                  fullWidth={true}
                  onNewRequest={this.handleChangeCallingAt}
                />
              </CardText>
            </Card>
            {this.state.departure ?
              <Departures
                title={`${this.state.departure.name} Departures`}
                subtitle={this.state.callingAt ?
                  `Trains calling at ${this.state.callingAt.name}`
                  : 'All departures'}
                station={this.state.departure.code}
                destination={this.state.callingAt ? this.state.callingAt.code : null}
              /> : null
            }
          </div>
        </div>
      </div>
    );
  }
}
