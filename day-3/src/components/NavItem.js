import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <span className={`NavItem ${this.props.selected ? 'selected' : ''}`}>
        {this.props.children}
      </span>
    );
  }
}

export default NavItem;
