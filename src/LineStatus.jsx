import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import IconDone from 'material-ui/svg-icons/action/done';
import IconSchedule from 'material-ui/svg-icons/action/schedule';
import IconCross from 'material-ui/svg-icons/content/clear';
import IconAlert from 'material-ui/svg-icons/alert/error-outline';
import LineStatusText from './LineStatusText';
import LineColours from './LineColours';
import './LineStatus.css';

class LineStatus extends Component {
  lineTextColor() {
    return LineColours.text[this.props.line.id] || 'rgb(255,255,255)';
  }

  lineIcon() {
    const status = this.props.line.lineStatuses[0].statusSeverity;
    if (status === 10) {
      return (
        <IconDone
          color={this.lineTextColor()}
        />
      );
    } else if (status === 20) {
      return (
        <IconCross
          color={this.lineTextColor()}
        />
      );
    } else if ([2, 3, 4, 5, 11].indexOf(status) > -1) {
      return (
        <IconAlert
          color={this.lineTextColor()}
        />
      );
    } else if ([6, 7, 9].indexOf(status) > -1) {
      return (
        <IconSchedule
          color={this.lineTextColor()}
        />
      );
    } else {
      return (null);
    }
  }

  render() {
    const statuses = this.props.line.lineStatuses.map((status, i) =>
      <LineStatusText status={status} key={i} mode={this.props.line.modeName} />
    );

    return (
      <ListItem
        style={{
          backgroundColor: LineColours[this.props.line.id],
          color: this.lineTextColor()
        }}
        primaryText={this.props.line.name}
        rightIcon={this.lineIcon()}
        initiallyOpen={false}
        autoGenerateNestedIndicator={true}
        primaryTogglesNestedList={true}
        nestedItems={this.props.line.lineStatuses[0].statusSeverity !== 10 ? statuses : undefined}
      />
    );
  }
}

export default LineStatus;
