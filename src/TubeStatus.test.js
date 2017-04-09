import React from 'react';
import ReactDOM from 'react-dom';
import TubeStatus from './TubeStatus';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<tubeStatus />, div);
});
