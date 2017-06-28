import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';


class TrainDepartureInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { departure: this.props.departure || null };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ departure: newProps.departure || this.props.departure });
  }
  render() {
    return (
      <ListItem disabled={true} >
        <div className='d-flex w-100 justify-content-between'>
          <p
            className={this.state.departure.etd === 'On time' ?
              'mb-1'
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

export default TrainDepartureInfo;
