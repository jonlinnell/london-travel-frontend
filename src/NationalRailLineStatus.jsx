import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import IconDone from 'material-ui/svg-icons/action/done';
import IconSchedule from 'material-ui/svg-icons/action/schedule';
import IconCross from 'material-ui/svg-icons/content/clear';
import IconAlert from 'material-ui/svg-icons/alert/error-outline';
import './NationalRailLineStatus.css';

/* ADD LINE STATUS ICON */

class NationalRailLineStatus extends Component {
  lineIcon() {
    const status = this.props.line.lineStatuses[0].statusSeverity;
    if (status === 10) {
      return (
        <IconDone />
      );
    } else if (status === 20) {
      return (
        <IconCross />
      );
    } else if ([2, 3, 4, 5, 11].indexOf(status) > -1) {
      return (
        <IconAlert />
      );
    } else if ([6, 7, 9].indexOf(status) > -1) {
      return (
        <IconSchedule />
      );
    } else {
      return (null);
    }
  }

  render() {
    return (
      <ListItem
        rightIcon={this.lineIcon()}
      >
        <img className='nationalrailline' src={this.props.logo} alt={this.props.line.name} />
      </ListItem>
    );
  }
}

export default NationalRailLineStatus;
