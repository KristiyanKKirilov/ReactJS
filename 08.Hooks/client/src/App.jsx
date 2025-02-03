import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/nav-bar/NavBar";
import ArticleList from "./components/article-list/ArticleList";
import Article from "./components/article/Article";
import { Routes, Route } from "react-router";

function App() {

  return (
   <>
        <NavBar/>
        <Routes>
          {/* <Routes path='/' element={<ArticleList/>}/> */}
          <Route path='/articles' element={<ArticleList/>}/>
          <Route path='/articles/:articleId' element={<Article/>}/>
        </Routes>
   </>
  );
}

export default App;
