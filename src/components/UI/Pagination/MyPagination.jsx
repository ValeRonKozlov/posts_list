import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const MyPagination = ({totalPages, currentPage, changePage}) => {

	const pagesArray = getPagesArray(totalPages)
	return (
		<div className="pagination__wrapper">
		{pagesArray.map((page) => 
			<span 
				key={page} 
				className={page === currentPage ? 'pagination__page page-current' : 'pagination__page'}
				onClick={() => changePage(page)}
				>
					{page}
			</span>
		)}
	</div>
	);
};

export default MyPagination;