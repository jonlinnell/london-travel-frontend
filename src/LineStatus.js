import React, { Component } from 'react';
import LineStatusIcon from './LineStatusIcon';
import "./LineStatus.css";

class LineStatus extends Component {
  render() {
    return(
      <div className='card' id={this.props.line.id}>
        <div className='card-header'>
          {this.props.line.name}
          <LineStatusIcon line={this.props.line} />
          </div>

      </div>
    )
  }
}

export default LineStatus;