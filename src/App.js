import React from "react";
import { Routes, Route } from "react-router-dom";
// импортируем страницы
import AutorizationPage from "./Pages/AutorizationPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
// импортируем компоненты
import MyNavigation from "./components/UI/Navigation/MyNavigation";
// импортируем стили
import "./styles/App.css";
import About from "./Pages/AboutPage/About";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {

  return (
    <div className="app">
      <MyNavigation />
      <Routes>
        <Route path="/autorization" element={<AutorizationPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/postspage" element={<PostsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
