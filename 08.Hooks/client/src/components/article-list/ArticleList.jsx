import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants";

import ArticleCard from "../article-card/ArticleCard";
import Button from 'react-bootstrap/Button';
import styles from "./ArticleList.module.css";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

export default function ArticleList() {
    const { data: articles, isFetching, refetch } = useFetch(BASE_URL, []);
    return (
        <>
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
