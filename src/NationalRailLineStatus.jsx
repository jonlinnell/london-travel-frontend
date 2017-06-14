import React, { Component } from 'react';
import './NationalRailLineStatus.css';

/* ADD LINE STATUS ICON */

class LineStatus extends Component {
  render() {
    return (
      <div>
        <li className='list-group-item line-info justify-content-between' id={this.props.line.id}>
            <img className='nationalrailline' src={this.props.logo} alt={this.props.line.name} />
        </li>
      </div>
    );
  }
}

export default LineStatus;
