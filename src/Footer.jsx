import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid d-flex w-100 justify-content-between py-3">
        <img src={require("../public/img/logo.png")} alt="logo"></img>
        <span className="align-middle">Designed by Jon Linnell</span>
      </div>
    )
  }
}

export default Footer;