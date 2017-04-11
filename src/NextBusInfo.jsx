import React, { Component } from 'react';

class NextBusInfo extends Component {
  render() {
    if (this.props.bus[0] === 4) {
      return null;
    } else {
      return(
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">{this.props.bus[3]}</h6>
              <small>{Math.round(((Math.abs(new Date(this.props.bus[4] - Date.now())) % 86400000) % 3600000) / 60000)} mins</small>
            </div>
          </a>
      );
    }
  }
}

export default NextBusInfo;