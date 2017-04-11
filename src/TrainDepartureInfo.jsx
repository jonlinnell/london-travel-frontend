import React, { Component } from 'react';

class TrainDepartureInfo extends Component {
  render() {
    return(
     <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h6 className="mb-1">{this.props.departure.destination_name}</h6>
        <small><p className="text-muted">{this.props.departure.aimed_departure_time}</p></small>
      </div>
    </a>
    );
  }
}

export default TrainDepartureInfo;