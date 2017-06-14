import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import './TrainDepartureInfoLate.css';

class TrainDepartureInfoLate extends Component {
  render() {
    return (
      <ListItem
        disabled={true}
      >
        <div className='d-flex w-100 justify-content-between'>
          <h6 className='mb-1 text-danger'>{this.props.departure.destination.name}</h6>
          <small className='text-danger'>{this.props.departure.std}</small>
        </div>
        <p className='mb-0 text-muted late-text'>This service is delayed and is expected to depart at {this.props.departure.etd}</p>
      </ListItem>
    );
  }
}

export default TrainDepartureInfoLate;
