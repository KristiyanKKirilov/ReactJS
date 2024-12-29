import { useEffect, useState } from "react";


export default function Effect(){
    const [count, setCount] = useState(0);
    const [decCount, setDecCount] = useState(0);
    
    useEffect(() => {
        console.log('Initial render');
    }, []);

    useEffect(() =>{
        console.log('updated');
    }, [count]);

    useEffect(() => {
        console.log('updated decimal count');
    }, [decCount]);

    useEffect(() => {
        return () => {
            console.log('Clean up func');
        }
        
    }, [])

    const incrementHandler = () => {
        setCount(oldCount => oldCount + 1);
        if(count % 10 === 0 && count !== 0){
            setDecCount(oldDecCount => oldDecCount + 1);
        }
    }
    return (
        <>
            <h2>Effect</h2>
            <p>{count}</p>
            <button onClick={incrementHandler}>Click</button>
        </>
    );
}
