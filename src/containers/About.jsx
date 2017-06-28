import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import logo from '../../public/img/logo.png';
import bg from '../../public/img/aboutbg.jpg';

const imgStyle = {
  width: '200px',
  height: 'auto',
  marginBottom: '2rem'
};

function About() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-4 offset-xl-4'>
          <Card>
            <CardMedia>
              <img src={bg} alt='' />
            </CardMedia>

            <CardTitle
              title='Loughborough University London Travel'
              subtitle='Local travel information for London-based staff, and those travelling between the two campuses.'
            />
            <CardText>
            <p>Designed and built by Jon Linnell</p>
            <p>Please send comments, queries, and suggestions to
              <a href='mailto:london-facilities@lboro.ac.uk'> London Facilities</a>
            </p>
            <p>Tube, bus, and National Rail status data are provided by TfL and TfL Open Data.</p>
            <p>National Rail departure information is provided by National Rail.</p>
            </CardText>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <a href='http://www.lboro.ac.uk/london' target='_blank'>
                <img style={imgStyle} src={logo} alt='logo' />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
