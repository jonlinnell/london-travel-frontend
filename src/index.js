import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './containers/App';
import './favicon.ico';
import './index.css';

import './img/footer-x-small.jpg';
import './img/footer-small.jpg';
import './img/footer-mid.jpg';
import './img/footer-large.jpg';
import './img/footer-full.jpg';
import './img/footer-ultra-wide.jpg';

import config from './utils/api';

ReactGA.initialize(config.ga, {debug: true});

const history = createBrowserHistory();

history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

render(
  <App history={history} />, document.getElementById('root')
);
