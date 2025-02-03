import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/nav-bar/NavBar";
import ArticleList from "./components/article-list/ArticleList";
import Article from "./components/article/Article";
import { Routes, Route, Navigate } from "react-router";

function App() {

  return (
   <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to='/articles'/>}/>
          <Route path='/articles' element={<ArticleList/>}/>
          <Route path='/articles/:articleId' element={<Article/>}/>
        </Routes>
   </>
  );
}

export default App;
