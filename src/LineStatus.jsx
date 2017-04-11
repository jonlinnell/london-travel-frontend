import React, { Component } from 'react';
import LineStatusIcon from './LineStatusIcon';
import LineStatusText from './LineStatusText';
import "./LineStatus.css";

class LineStatus extends Component {
  render() {
    const statuses = this.props.line.lineStatuses.map((status, i) =>
      <LineStatusText status={status} key={i} />
    );
    return(
      <div>
        <li className='list-group-item line-info justify-content-between' id={this.props.line.id}>
            {this.props.line.name}
            <LineStatusIcon line={this.props.line} />
        </li>
        {statuses}
      </div>
    )
  }
}

export default LineStatus;