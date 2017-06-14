import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';


class TrainDepartureInfo extends Component {
  render() {
    return (
      <ListItem
        disabled={true}
      >
        <div className='d-flex w-100 justify-content-between'>
          <h6 className='mb-1' style={{ fontWeight: 400 }}>{this.props.departure.destination.name}</h6>
          <small className='text-muted'>{this.props.departure.std}</small>
        </div>
      </ListItem>
    );
  }
}

export default TrainDepartureInfo;
