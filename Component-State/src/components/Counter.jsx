import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonClickHandler = () => {
        setCount(count + 1);
    }

    function resetButtonClickHandler(e){
        console.log(e);
        setCount(0);
    }

    
    function decrementButtonClickHandler(){
        setCount(count - 1);
    }

    const countText = count >= 0 ? `Positive ${count}`: `Negative ${count}`;

    return (
        <>
            <h2>Counter</h2>
            <p>{countText}</p> 
            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={resetButtonClickHandler}>0</button>
            <button onClick={incrementButtonClickHandler}>+</button>
        </>
    );
}
