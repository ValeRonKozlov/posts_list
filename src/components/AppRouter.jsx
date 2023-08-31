import React from 'react';
import { Routes, Route } from "react-router-dom";
// импортируем маршруты
import { privateRouts, publicRouts} from '../router/routs'

const AppRouter = () => {
	const isAuthent = true;
	return (
		isAuthent 
		? <Routes>
				{privateRouts.map(rout => (
					<Route path={rout.path} element={rout.component} key={rout.path} />
				))}
			</Routes>
		: <Routes>
				{publicRouts.map(rout => (
					<Route path={rout.path} element={rout.component} key={rout.path} />
				))}
			</Routes>
	);
}

export default AppRouter;