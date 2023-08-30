import React, { useEffect, useState } from "react";
import './PostPage.css';
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";
import PostFilter from "../../components/PostFilter";
import MyModal from "../../components/UI/MyModal/MyModal";
import MyButton from "../../components/UI/Button/MyButton";
import { usePosts } from "../../hooks/usePosts.js";
import PostService from "../../API/PostService";
import Loader from "../../components/UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching.js";
import { getPageCount } from "../../utils/pages.js";
import MyPagination from "../../components/UI/Pagination/MyPagination";

function PostsPage() {
  const [posts, setPosts] = useState([])
  // модальное окно
  const [modal, setModal] = useState(false)
  // сортировка и фильтрация постов
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query)
  //  создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  // получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  // пагинация 
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const changePage = (currentPage) => {
    setCurrentPage(currentPage)
    fetchPosts(limit, currentPage)
  }
  
  // Api methods
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, currentPage) => {
      const responce = await PostService.getAll(limit, currentPage);
      setPosts(responce.data);
      const totalCount = responce.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    })
    
  useEffect(() => {
    fetchPosts(limit, currentPage);
  }, []);


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
      {/* обработка ошибки  */}
      {postError && <h1 style={{color:'red', display: 'flex', justifyContent: 'center'}}>{postError}</h1>}
      {isPostLoading 
      ? <div style={{display: "flex", justifyContent: 'center'}}><Loader/></div>
      : <PostList posts={sortedAndSerchedPosts} remove={removePost} title='Post List 1'/>
      }
      <MyPagination currentPage={currentPage} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default PostsPage;
