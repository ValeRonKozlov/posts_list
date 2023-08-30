import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MyNavigation.module.css'

const MyNavigation = () => {
	return (
		<div className={classes.myNavigation}>
			<Link to="/about" className={classes.myNavigation__link}> About Us</Link>
			<Link to='/postspage' className={classes.myNavigation__link}> Posts Page</Link>
		</div>
	);
};

export default MyNavigation;