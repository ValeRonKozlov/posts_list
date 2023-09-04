import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css'
import MyButton from '../Button/MyButton';
import { AuthContext } from '../../../context/context.js';

const NavBar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	const logout = () => {
    setIsAuth(false);
		localStorage.removeItem('auth');
  }
	return (
		<div className={classes.myNavigation}>
			<Link to="/about" className={classes.myNavigation__link}> About Us</Link>
			<Link to='/posts' className={classes.myNavigation__link}> Posts Page</Link>
			<MyButton onClick={logout}><Link to='/login' className={classes.myNavigation__link__logout}>Exit</Link></MyButton>
		</div>
	);
};

export default NavBar;