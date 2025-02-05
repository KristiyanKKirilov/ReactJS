import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/nav-bar/NavBar";
import ArticleList from "./components/article-list/ArticleList";
import Article from "./components/article/Article";
import { Routes, Route, Navigate } from "react-router";
import ArticleCreate from "./components/article-create/ArticleCreate";

function App() {

  return (
   <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to='/articles'/>}/>
          <Route path='/articles' element={<ArticleList/>}/>
          <Route path='/articles/:articleId' element={<Article/>}/>
          <Route path='/articles/create' element={<ArticleCreate/>}/>
        </Routes>
   </>
  );
}

export default App;
