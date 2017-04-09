import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './LineStatusIcon.css';

class LineStatusIcon extends Component {
  render() {
    const status = this.props.line.lineStatuses[0].statusSeverity
    if (status === 10) {
      return (
        <span className="align-middle float-right"><i className="fa fa-check fa-lg linestatus"></i></span>
      );
    } else if (status === 20) {
      return (
        <span className="align-middle float-right"><i className="fa fa-times fa-lg linestatus"></i></span>
      );
    } else {
      return (null);
    }
  }
}

export default LineStatusIcon;