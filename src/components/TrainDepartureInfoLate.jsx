import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class TrainDepartureInfoLate extends Component {
  constructor() {
    super();
    this.state = { departure: this.props.departure };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ departure: newProps.departure || this.props.departure });
  }
  render() {
    return (
      <ListItem
        disabled={true}
      >
        <div className='d-flex w-100 justify-content-between'>
          <p className='mb-1 text-danger'>{this.state.departure.destination.name}</p>
          <small className='text-danger'>{this.state.departure.std}</small>
        </div>
        <p className='mb-0 text-muted late-text'>This service is delayed and is expected to depart at {this.state.departure.std}</p>
      </ListItem>
    );
  }
}

export default TrainDepartureInfoLate;
