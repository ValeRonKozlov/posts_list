import React, { useState } from "react";
import './styles/App.css'
import PostLIst from "./components/PostLIst";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Pithon', body: 'Description'},
    {id: 3, title: 'C++', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // получаем пост из дочернего компонента

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      
      {/* условная отрисовка */}
      {posts.length
        ?  <PostLIst posts={posts} remove={removePost} title='Post List 1'/>
        : <h1 
            style={{textAlign: 'center', color: 'red', marginTop: 30}}
            className="no__posts">There is no posts to show!
          </h1>
      }
      
    </div>
  );
}

export default App;
