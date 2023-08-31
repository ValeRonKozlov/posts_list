import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// кастомный хук
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
// лоадер
import Loader from '../../components/UI/Loader/Loader';

const PostIdPage = () => {
	// получаем id поста
	const params = useParams();
	// посты и комменты
	const [post, setPost] = useState({});
	const [comment, setComment] = useState([]);

	// получаем пост по id
	const [fethPostById, isLoading, error] = useFetching( async (id) =>{
		const responce = await PostService.getPostById(id);
		setPost(responce.data);
	});
	// получаем комментарии по id
	const [fethCommentById, isCommentLoading, errorComment] = useFetching( async (id) =>{
		const responce = await PostService.getCommentById(id);
		setComment(responce.data);
	});

	useEffect(() => {
		fethPostById(params.id);
		fethCommentById(params.id);
	}, []); 

	return (
		<div>
			{isLoading
			? <Loader/>
			: <div>
				
				<h1>
					{post.id}.
					{post.title}
				</h1>
				<p>{post.body}</p>
			</div>
			}
			{isCommentLoading
			? <Loader/>
			: <div>
				<h2>Comments</h2>
          {comment.map(comment => (
            <div key={comment.id}>
							<h3>{comment.name}</h3>
							<p>{comment.email}</p>
							<p>{comment.body}</p>
            </div>
          ))}
			</div>
			}
		</div>
	);
};

export default PostIdPage;