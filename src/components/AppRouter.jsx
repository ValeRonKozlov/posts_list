import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
// импортируем маршруты
import { privateRouts, publicRouts} from '../router/routs'
import { AuthContext } from '../context/context';

const AppRouter = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	
	return (
		isAuth
		? <Routes>
				{privateRouts.map(rout => (
					<Route path={rout.path} element={rout.component} key={rout.path} />
				))}
				<Route path="/login" element={<Navigate to='/posts'/>} />
			</Routes>
		: <Routes>
				{publicRouts.map(rout => (
					<Route path={rout.path} element={rout.component} key={rout.path} />
				))}
				<Route path="/posts_list" element={<Navigate to='/login'/>} />
			</Routes>
	);
}

export default AppRouter;