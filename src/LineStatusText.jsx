import React, { Component } from 'react';
import './LineStatusText.css';

class LineStatusText extends Component {
  render() {
    const statuses = [
      'Special Service',
      'Closed',
      'Suspended',
      'Part Suspended',
      'Planned Closure',
      'Part Closure',
      'Severe Delays',
      'Reduced Service',
      'Bus Service',
      'Minor Delays',
      'Good Service',
      'Part Closed',
      'Exit Only',
      'No Step Free Access',
      'Change of frequency',
      'Diverted',
      'Not Running',
      'Issues Reported',
      'No Issues',
      'Information',
      'Service Closed'
    ];
    if (this.props.status.statusSeverity === 10) {
      if (this.props.extended === true) {
        return (
          <li className='list-group-item line-status'>
            <p className='status-text'>{statuses[this.props.status.statusSeverity]}</p>
          </li>
        );
      } else {
        return null;
      }
    } else {
      return (
        <li className='list-group-item line-status'>
          <p className='status-text'>{statuses[this.props.status.statusSeverity]}
          {this.props.mode === 'national-rail' ? null : <small className='ml-2 text-muted reason'>{this.props.status.reason}</small>}
          </p>
        </li>
      );
    }
  }
}

export default LineStatusText;
