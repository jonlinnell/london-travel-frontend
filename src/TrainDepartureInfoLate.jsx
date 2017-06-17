import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class TrainDepartureInfoLate extends Component {
  render() {
    return (
      <ListItem
        disabled={true}
      >
        <div className='d-flex w-100 justify-content-between'>
          <p className='mb-1 text-danger'>{this.props.departure.destination.name}</p>
          <small className='text-danger'>{this.props.departure.std}</small>
        </div>
        <p className='mb-0 text-muted late-text'>This service is delayed and is expected to depart at {this.props.departure.etd}</p>
      </ListItem>
    );
  }
}

export default TrainDepartureInfoLate;
