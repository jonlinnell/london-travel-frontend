import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

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
    return (
      <ListItem
        disabled={true}
      >
        <p>{statuses[this.props.status.statusSeverity]}</p>
        <p className='text-muted'>{this.props.mode === 'national-rail' ? null : this.props.status.reason}</p>
      </ListItem>
    );
  }
}

export default LineStatusText;
