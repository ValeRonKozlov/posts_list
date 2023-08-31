import React from "react";
// импортируем компоненты
import NavBar from "./components/UI/Navigation/NavBar";
import AppRouter from "./components/AppRouter";
// импортируем стили
import "./styles/App.css";

function App() {

  return (
    <div className="app">
      <NavBar />
      <AppRouter/>
    </div>
  );
}

export default App;
