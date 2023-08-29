import React from 'react';
import PostItem from './PostItem';

const PostLIst = ({posts, title, remove}) => {

	// условная отрисовка
	if(!posts.length) {
		return (
			<h1 style={{textAlign: 'center' , color: 'red'}}>
				There is no posts to show!!!
			</h1>
		)
	}
	
	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => 
        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
      )}
		</div>
	);
};

export default PostLIst;