import React from 'react';
import logo from '../img/logo.png';
import footerWhite from '../img/footer-large-white.png';

const imgStyle = {
  width: '14rem',
  height: 'auto',
  marginBottom: '2rem'
};

const containerStyle = {
  marginTop: '-1rem',
  marginBottom: '2px',
  padding: '2rem 1rem 7rem 1rem',
  background: `url(${footerWhite}) #282828 center bottom repeat-x`
};

const aStyle = {
  color: 'white',
  textDecoration: 'underline'
};

const creditStyle = {
  fontFamily: 'DIN Round Web Medium',
  color: 'white',
  width: '100%',
  textAlign: 'center'
};

const d = new Date();

function About() {
  return (
    <div className='container-fluid' style={containerStyle}>
      <div className='row'>
        <div className='col-xl-4 offset-xl-4'>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={logo} style={imgStyle} alt='Loughborough University Logo' />
          </div>
          <h3 style={creditStyle}>London Travel</h3>
          <p style={creditStyle}>Designed and built by Jon Linnell.</p>
          <p style={creditStyle}>Please send comments, queries, and suggestions to&nbsp;
            <a style={aStyle} href='mailto:london-facilities@lboro.ac.uk'>London Facilities.</a>
          </p>
          <p style={creditStyle}>
            Tube, bus, and National Rail status data are provided by TfL and TfL Open Data.
            National Rail departure information is provided by National Rail.
          </p>
          <p style={creditStyle}>&copy; {d.getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
