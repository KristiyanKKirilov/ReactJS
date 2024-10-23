import { useState } from 'react';
import './Counter.css';  
import KillCounter from './KillCounter';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonClickHandler = () => {
        setCount(count + 1);
    }

    function resetButtonClickHandler(){ 
        setCount(0);
    }

    
    function decrementButtonClickHandler(){
        setCount(count - 1);
    }

    const condition = count >= 0;

    const countText = condition ? `Positive ${count}`: `Negative ${count}`;
    const color = condition ? 'green' :'red';
    const className = condition ? 'positive-text' : 'negative-text';

    return (
        <>
            <h2>Counter</h2>
            
            <KillCounter count={count}/>

            <p style={{color}} className={className}>{countText}</p> 

            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={resetButtonClickHandler}>0</button>
            {count < 10 && <button onClick={incrementButtonClickHandler}>+</button>}
        </>
    );
}
