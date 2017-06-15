/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const containerStyles = {
  display: 'block',
  width: '100%',
  textAlign: 'center',
  padding: '1rem'
};

export default class Spinner extends Component {
  render() {
    return (
      <div style={containerStyles}>
        <CircularProgress />
      </div>
    );
  }
}
