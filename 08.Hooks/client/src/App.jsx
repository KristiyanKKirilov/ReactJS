import { useFetch } from "./hooks/useFetch";
import { BASE_URL } from "./constants";

import "bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "./components/article-card/ArticleCard";
import Button from 'react-bootstrap/Button';
import NavBar from "./components/nav-bar/NavBar";
import styles from "./App.module.css";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";

function App() {
  const { data: articles, isFetching, refetch } = useFetch(BASE_URL, []);

  return (
    <>
      <NavBar />
      {!isFetching ? (
        <div className={styles["article-list"]}>
          {articles.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}

        <Button variant="dark" onClick={refetch}>Refetch</Button>
    </>
  );
}

export default App;
