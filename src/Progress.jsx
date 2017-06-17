import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const containerStyles = {
  display: 'block',
  width: '100%',
  textAlign: 'center',
  padding: '1rem'
};

export default function Progress() {
  return (
    <div style={containerStyles}>
      <CircularProgress />
    </div>
  );
}
