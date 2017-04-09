import React, { Component } from 'react';

class LineStatusIcon extends Component {
  render() {
    if (!this.props.disruptions) {
      return (
        <i className="fa fa-check fa-lg float-right"></i>
      )
    }
  }
}

export default LineStatusIcon;