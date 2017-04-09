import React, { Component } from 'react';
import LineStatusIcon from './LineStatusIcon'

class LineStatus extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    console.log(JSON.stringify(this.props.line));
    return(
      <p>Status for {this.props.line.id}</p>
    )
  }
}

export default LineStatus;