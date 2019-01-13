import React, { Component } from 'react';

class NavItems extends Component {
	render() {
		return <span className="NavItem">{this.props.children}</span>;
	}
}

export default NavItems;
