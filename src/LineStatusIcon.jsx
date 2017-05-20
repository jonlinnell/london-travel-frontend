import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './LineStatusIcon.css';

class LineStatusIcon extends Component {
  render() {
    const status = this.props.line.lineStatuses[0].statusSeverity;
    if (status === 10) {
      return (
        <span className="align-middle float-right"><i className={`fa fa-check fa-lg linestatus ${this.props.line.id}`}></i></span>
      );
    } else if (status === 20) {
      return (
        <span className="align-middle float-right"><i className={`fa fa-times fa-lg linestatus ${this.props.line.id}`}></i></span>
      );
    } else if ([2, 3, 4, 5, 11].indexOf(status) > -1) {
      return (
        <span className="align-middle float-right"><i className={`fa fa-exclamation-circle fa-lg linestatus ${this.props.line.id}`}></i></span>
      );
    } else if ([6, 7, 9].indexOf(status) > -1) {
      return (
        <span className="align-middle float-right"><i className={`fa fa-clock-o fa-lg linestatus ${this.props.line.id}`}></i></span>
      );
    } else {
      return (null);
    }
  }
}

export default LineStatusIcon;
