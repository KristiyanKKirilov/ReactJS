import { useEffect, useState } from "react";

export function useFetch(url, initialData){
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        setIsFetching(true);

        (async () => {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setIsFetching(false);
        })();
    }, [url, toggleRefetch]);

    const refetch = () => {
        setToggleRefetch(state => !state);
    }

    return { 
        data,
        isFetching,
        refetch
     };
}
