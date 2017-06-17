import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const containerStyles = {
  display: 'block',
  width: '100%',
  textAlign: 'center',
  padding: '1rem'
};

const defaultErrorText = 'Either the data couldn\'t be loaded, or was never there to begin with.';

export default class Spinner extends Component {
  showErrorText() {
    return (
      <div>
        <p>Unable to load data</p>
        <p className='text-muted'>{ this.props.errorText || defaultErrorText }</p>
      </div>
    );
  }
  componentWillReceiveProps(newProps) {
    this.setState({ newProps });
  }
  render() {
    return (
      <div style={containerStyles}>
        { this.props.error ? this.showErrorText() : <CircularProgress /> }
      </div>
    );
  }
}
