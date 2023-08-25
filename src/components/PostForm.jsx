import React, {useState} from 'react';
import MyInput from './UI/Input/MyInput';
import MyButton from './UI/Button/MyButton';

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', body: ''})

		const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
    setPost({title: '', body: ''})
  }
	return (
		<form>
			<MyInput 
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				type='text'
				placeholder="Post Name"
			/>
			<MyInput
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				type='text'
				placeholder='Post Description'
			/>
			<MyButton onClick={addNewPost}>Add Post</MyButton>
		</form>
	);
};

export default PostForm;

  // Поля для инпутов

  // const [post, setPost] = useState({title: '', body: ''})

  // const addNewPost = (e) => {
  //   e.preventDefault();

  //   setPosts([...posts, {...post, id: Date.now()}])
  //   setPost({title: '', body: ''})
  // }

// управояемый компонент
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')

  // неуправляемый компонент
  // const bodyInputRef = useRef()

  // const addNewPost = (e) => {
  //   e.preventDefault();
  //   const newPost = {
  //     id: Date.now(),
  //     title,
  //     body
  //   }
  //   setPosts([...posts, newPost])
  //   setTitle('')
  //   setBody('')
  // }

	// <form> 
	// 	/* Управляемый Компонент */
	// 	<MyInput 
	// 		type="text" 
	// 		placeholder="Post Name" 
	// 		value={title} 
	// 		onChange={e => setTitle(e.target.value)}
	// 	/>
	// 	<MyInput
	// 		type="text"
	// 		placeholder="Post Description"
	// 		value={body}
	// 		onChange={e => setBody(e.target.value)}
	// 	/>
	// 	/* Неуправляемый компонент
	// 	<MyInput 
	// 		type="text" 
	// 		placeholder="Post Description" 
	// 		ref={bodyInputRef}
	// 	/>
	// 	/* <MyButton onClick={addNewPost}>Add Post</MyButton>
	// </form> 