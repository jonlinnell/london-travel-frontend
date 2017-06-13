import React, { Component } from 'react';

class TrainDepartureInfo extends Component {
  render() {
    return (
      <a className='list-group-item list-group-item-action flex-column align-items-start'>
        <div className='d-flex w-100 justify-content-between'>
          <h6 className='mb-1'>{this.props.departure.destination.name}</h6>
          <small className='text-muted'>{this.props.departure.std}</small>
        </div>
      </a>
    );
  }
}

export default TrainDepartureInfo;
