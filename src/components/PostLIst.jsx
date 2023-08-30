import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
			<TransitionGroup>
				{posts.map((post, index) => 
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
						<PostItem remove={remove} number={index + 1} post={post} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
};

export default PostLIst;