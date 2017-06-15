import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import App from './App';
import Footer from './Footer';
import '../public/favicon.ico';
import './index.css';


render(
  <App />, document.getElementById('root')
);

render(<Footer />, document.getElementById('footer'));
