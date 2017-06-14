import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
/* eslint-disable consistent-return */

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
        primaryText={statuses[this.props.status.statusSeverity]}
        secondaryTextLines={2}
        secondaryText={this.props.mode === 'national-rail' ? null : this.props.status.reason}
      />
    );
  }
}

export default LineStatusText;
