import React, { Component } from 'react';
import NavItem from './NavItem';

const logo = require('../assets/logo.png');

const navItems = [
  'Enrollment Details',
  'Course Details',
  'Time Table',
  'Attendance',
  'Internal Marks',
  'Grade Sheet',
  'Achievements',
  'Incidents'
];

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bg">
        <img src={logo} className="logo" alt="Manipal Logo" />
        {navItems.map((item, i) => (
          <NavItem key={i}>{item}</NavItem>
        ))}
      </div>
    );
  }
}

export default Navbar;
