/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import './Footer.css';

import logo from '../public/img/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="http://lborolondon.ac.uk"><img src={logo} alt="logo" /></a>
        <div className="credit">
          <p className="credit text-muted">&copy; {new Date().getFullYear()} Loughborough University London</p>
          <p className="credit text-muted">Data provided by Transport for London, and Transport API.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
