import { Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

import NavBar from "./components/nav-bar/NavBar";
import ArticleList from "./components/article-list/ArticleList";
import Article from "./components/article/Article";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticleCreate from "./components/article-create/ArticleCreate";
import Login from "./components/login/Login";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const login = (username, password) => {
    //TODO Validations
    setCurrentUser({username});
  }

  return (
   <>
    <UserContext.Provider value={{user: currentUser, login}}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to='/articles'/>}/>
          <Route path='/articles' element={<ArticleList/>}/>
          <Route path='/articles/:articleId' element={<Article/>}/>
          <Route path='/articles/create' element={<ArticleCreate/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </UserContext.Provider>
   </>
  );
}

export default App;
