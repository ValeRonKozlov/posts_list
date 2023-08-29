import React, { useState, useMemo } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Python', body: 'All Description'},
    {id: 3, title: 'C++', body: 'therd Description'},
  ])

  // модальное окно
  const [modal, setModal] = useState(false)
  
  // фильтр
  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('Function Sorted Posts Works')
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return [...posts]
  }
  , [filter.sort, posts])

  // поиск
  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },
  [filter.query, sortedPosts])

  //  создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // получаем пост из дочернего компонента

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="app">
      <MyButton 
        style={{marginTop: 30}}
        onClick={() => setModal(true)}
      >
        Add New Post
      </MyButton>
      <MyModal 
        visible={modal}
        setVisible={setModal}  
      >
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: 15}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSerchedPosts} remove={removePost} title='Post List 1'/>
    </div>
  );
}

export default App;
