import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css'

const NavBar = () => {
	return (
		<div className={classes.myNavigation}>
			<Link to="/about" className={classes.myNavigation__link}> About Us</Link>
			<Link to='/posts' className={classes.myNavigation__link}> Posts Page</Link>
		</div>
	);
};

export default NavBar;