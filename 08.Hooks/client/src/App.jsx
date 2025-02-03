import { useFetch } from "./hooks/useFetch";
import { BASE_URL } from "./constants";

import "bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "./components/article-card/ArticleCard";
import NavBar from "./components/nav-bar/NavBar";
import styles from './App.module.css';

function App() {
    const {data: articles} = useFetch(BASE_URL, []);

  return (
    <>
      <NavBar />
      <div className={styles["article-list"]}>
        {articles.map(article => <ArticleCard key={article._id} {...article}/>)}
      </div>
    </>
  );
}

export default App;
