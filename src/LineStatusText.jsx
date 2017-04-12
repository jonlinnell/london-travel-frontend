import React, { Component } from 'react';
import "./LineStatusText.css";

class LineStatusText extends Component {
  render() { 
    var statuses = {
      '0': "Special Service",
      '1': "Closed",
      '2': "Suspended" ,
      '3': "Part Suspended",
      '4': "Planned Closure",
      '5': "Part Closure",
      '6': "Severe Delays",
      '7': "Reduced Service",
      '8': "Bus Service",
      '9': "Minor Delays",
      '10': "Good Service",
      '11': "Part Closed",
      '12': "Exit Only",
      '13': "No Step Free Access",
      '14': "Change of frequency",
      '15': "Diverted",
      '16': "Not Running",
      '17': "Issues Reported",
      '18': "No Issues",
      '19': "Information",
      '20': "Service Closed"
    };
    if (this.props.status.statusSeverity === 10) {
      return null;
    } else {
      return(
        <li className='list-group-item line-status'>
          <p className='mb-0'>{statuses[this.props.status.statusSeverity]}</p>
          {this.props.mode === 'national-rail' ? null : <p className="text-muted mb-0 reason">{this.props.status.reason}</p>}
        </li>
      );
    }
  }
}

export default LineStatusText;