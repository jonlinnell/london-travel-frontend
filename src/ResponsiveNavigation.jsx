import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom';

import IconHome from 'material-ui/svg-icons/action/home';
import IconInfo from 'material-ui/svg-icons/action/info';
import IconTrain from 'material-ui/svg-icons/maps/directions-transit';

/** ************************** **/
/* I extracted this component   */
/* because I plan on making the */
/* BottomNavigation element     */
/* change colour based on       */
/* scroll, if the user hits the */
/* bottom of the page.          */
/* Half-working test is in my   */
/* Dropbox vault.               */
/** ****************** 17/6/17 **/

const LinkStyle = {
  textAlign: 'center'
};

const BottomNavigationStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 1
};

export default class ResponsiveNavigation extends Component {
  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation
          selectedIndex={this.props.parent.state.selectedIndex}
          style={BottomNavigationStyle}
        >
          <BottomNavigationItem
            label='Home'
            icon={<IconHome />}
            onTouchTap={() => this.props.parent.select(0)}
            style={LinkStyle}
            className='BottomNavigationItemAnimate  '
            containerElement={<Link to='/travel/' />}
          />

          <BottomNavigationItem
            label='Trains'
            icon={<IconTrain />}
            onTouchTap={() => this.props.parent.select(1)}
            style={LinkStyle}
            className='BottomNavigationItemAnimate  '
            containerElement={<Link to='/travel/nationalrail/' />}
          />

          <BottomNavigationItem
            label='About'
            icon={<IconInfo />}
            onTouchTap={() => this.props.parent.select(2)}
            style={LinkStyle}
            containerElement={<Link to='/travel/about/' />}
          />

        </BottomNavigation>
      </Paper>
    );
  }
}
