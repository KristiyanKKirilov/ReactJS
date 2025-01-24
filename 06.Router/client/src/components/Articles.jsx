import { useEffect, useState } from "react";
import { baseUrl } from "../constants";
import {Link} from 'react-router-dom';


export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${baseUrl}/list`);
      const result = await response.json();
      // const articles = Object.values(result);
      setArticles(result);
      console.log(result);
    })();
  }, []);

  return (
    <ul role="list" className="mt-20 p-20 divide-y divide-gray-100">
      {articles.map((article) => (
        <Link to={`/articles/${article._id}`} key={article._id} >
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {article.title}
                </p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
