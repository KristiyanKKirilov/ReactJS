import "bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "./components/article-card/ArticleCard";
import NavBar from "./components/nav-bar/NavBar";
import styles from './App.module.css';
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants";

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(BASE_URL);
            const result = await response.json();
            setArticles(result);
        })();
    }, []);

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
