import React, { Component } from 'react';
import "./TrainDepartureInfoLate.css";

class TrainDepartureInfoLate extends Component {
  render() {
    return(
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1 text-danger">{this.props.departure.destination_name}</h6>
          <small className="text-danger">{this.props.departure.aimed_departure_time}</small>
        </div>
        <p className="mb-0 text-muted late-text">This service is delayed and is expected to depart at {this.props.departure.expected_departure_time}</p>
      </a>
    );
  }
}

export default TrainDepartureInfoLate;
