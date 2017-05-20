import React, { Component } from 'react';
import LineStatusIcon from './LineStatusIcon';
import './NationalRailLineStatus.css';

class LineStatus extends Component {
  render() {
    return (
      <div>
        <li className='list-group-item line-info justify-content-between' id={this.props.line.id}>
            <img className='nationalrailline' src={this.props.logo} alt={this.props.line.name} />
            <LineStatusIcon line={this.props.line} />
        </li>
      </div>
    );
  }
}

export default LineStatus;
