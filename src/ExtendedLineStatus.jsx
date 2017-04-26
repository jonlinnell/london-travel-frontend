import React, { Component } from 'react';
import LineStatusIcon from './LineStatusIcon';
import LineStatusText from './LineStatusText';
import "./LineStatus.css";

class ExtendedLineStatus extends Component {
  render() {
    const statuses = this.props.line.lineStatuses.map((status, i) =>
      <LineStatusText status={status} key={i} mode={this.props.line.modeName} extended={true} />
    );
    return(
      <div className="row">
        <li className='list-group-item line-info col-lg-3' id={this.props.line.id}>
            {this.props.line.name}
        </li>
        <li className='list-group-item col-lg-9'>
          {statuses}
        </li>
      </div>
    )
  }
}

export default ExtendedLineStatus;