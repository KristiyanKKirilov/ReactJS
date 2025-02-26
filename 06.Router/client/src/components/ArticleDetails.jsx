import {useEffect, useState} from 'react';
import { baseUrl } from '../constants';
import { useParams, useLocation, useNavigate } from 'react-router';


export default function ArticleDetails() {
    const [article, setArticle] = useState({});
    const {articleId} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

    useEffect(() => {
        (async () => {
            const response = await fetch(`${baseUrl}/details/${articleId}`);
            if(response.status === 204){
                //TODO redirect
                navigate('/404');
                return;
            }
            const result = await response.json();
            setArticle(result);
        })();
    }, []);

  return (
    <div className="mt-20 p-20">
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">Article details</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">{article.title}</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{article.content}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
