/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

const nestedListStyle = {
  backgroundColor: '#EFEFEF',
  color: '#333',
  fontSize: '0.9rem',
  padding: '1rem'
};

const SubsequentCallingPointSTStyle = {
  fontWeight: 'bold',
  marginRight: '0.5rem',
  marginLeft: '12px'
};

class SubsequentCallingPoint extends Component {
  render() {
    return (
      <div className='d-flex justify-content-start'>
        {
          this.props.station.et === 'On time'
          ? <p style={SubsequentCallingPointSTStyle}>{this.props.station.st}</p>
          : <p style={SubsequentCallingPointSTStyle} className='text-danger'>{this.props.station.et}</p>
        }
        <p>{this.props.station.locationName}</p>
      </div>
    );
  }
}

export default class TrainDepartureInfo extends Component {
  constructor(props) {
    super(props);

    const tempCallingPoints = [];
    this.props.departure.subsequentCallingPoints.map((station, i) => {
      tempCallingPoints.push(<SubsequentCallingPoint key={i} station={station} />);
    });

    this.state = {
      departure: this.props.departure || null,
      subsequentCallingPoints: tempCallingPoints
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ departure: newProps.departure || this.props.departure });
  }
  render() {
    return (
      <ListItem
        nestedItems={this.state.subsequentCallingPoints}
        primaryTogglesNestedList={true}
        autoGenerateNestedIndicator={false}
        nestedListStyle={nestedListStyle}
      >
        <div className='d-flex w-100 justify-content-between'>
          <p className={this.state.departure.etd === 'On time'
            ? 'mb-1'
            : 'mb-1 text-danger'} style={{ fontWeight: 400 }}
          >
            {this.state.departure.destination.name}
          </p>
          <small className={'text-muted'}>{this.state.departure.std}</small>
        </div>
        {this.state.departure.etd !== 'On time' ?
          <p className='mb-0 text-muted late-text'>
            This service is delayed and is expected to depart at {this.state.departure.etd}
          </p>
          : null }
      </ListItem>
    );
  }
}
