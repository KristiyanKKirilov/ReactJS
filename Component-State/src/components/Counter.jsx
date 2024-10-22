import { useState } from 'react';

export default function Counter(){
    const  [count, setCount] = useState(0);

    setTimeout(() => {
        //setCount(oldState => oldState + 1);
    }, 1000); 

    return (
        <>
            <h2>Counter</h2>

            <p>{count}</p>
        </>
    );
} 
