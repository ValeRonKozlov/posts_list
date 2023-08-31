import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
	return (
		<div className='notFound__wrapper'>
			<h1 className='notFound-title'>Page Not Found</h1>
				<Link className='notFound-link' to='/autorization'>Back</Link>
		</div>
	);
};

export default NotFoundPage;