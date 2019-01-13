import React, { Component } from 'react';
import Searchbar from './Searchbar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <i className="fa fa-2x fa-align-right" />
        <span className="Breadcrumbs">
          <span>Academics</span> <span>/</span> <span>Enrollment Details</span>
        </span>
        <Searchbar />
        <i className="fa fa-2x fa-th" />
        <i className="fa fa-2x fa-user-circle" />
      </div>
    );
  }
}

export default Header;
