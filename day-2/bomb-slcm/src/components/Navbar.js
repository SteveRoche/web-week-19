import React, { Component } from 'react';
import NavItems from './NavItems';

import './Navbar.css';

const logo = require('../assets/logo.png');

class Navbar extends Component {
	render() {
		return (
			<div className="nav-bg">
				<img className="logo" src={logo} alt="Manipal Logo" />
				<NavItems />
			</div>
		);
	}
}

export default Navbar;
