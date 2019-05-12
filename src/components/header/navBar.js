import React, { Component } from "react";
import logo from '../../assets/CF_logo_RGB_NEG.svg'
import "./navBar.css";

class Navbar extends Component {
	render() {
		return (
			<div className="nav-container">
				<nav className="navbar">
					<img
						className="logo"
						src={logo}
						alt="currency fair"
					/>
				</nav>
			</div>
		);
	}
}

export default Navbar;
