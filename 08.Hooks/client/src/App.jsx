import "bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "./components/article-card/ArticleCard";
import NavBar from "./components/nav-bar/NavBar";
import styles from './App.module.css';

function App() {
  return (
    <>
      <NavBar />
      <div className={styles["article-list"]}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </>
  );
}

export default App;
