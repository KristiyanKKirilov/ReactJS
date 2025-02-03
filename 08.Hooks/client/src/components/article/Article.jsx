import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants";

export default function Article() {
    const {articleId} = useParams();
    const {data: article, isFetching} = useFetch(`${BASE_URL}/details/${articleId}`, {});

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </>
    );
}
