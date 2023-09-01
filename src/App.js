import React, { useEffect, useState } from "react";
// импортируем компоненты
import NavBar from "./components/UI/Navigation/NavBar";
import AppRouter from "./components/AppRouter";
// импортируем стили
import "./styles/App.css";
// 
import { AuthContext } from "./context/context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);
  return (
    <div className="app">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <NavBar />
        <AppRouter/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
