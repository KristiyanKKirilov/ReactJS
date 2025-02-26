import { useState } from "react";

export default function BaseCounter() {
    const [count, setCount] = useState(0);

    function incrementButtonHandler(){
        setCount(oldCount => oldCount + 1);
    }

    const resetButtonHandler = (e) => {
        console.log(e);
        setCount(0);
    }

    function decrementButtonHandler(){
        setCount(oldCount => oldCount - 1);
    }

    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={decrementButtonHandler}>Decrement</button>
            <button onClick={resetButtonHandler}>Reset</button>
            <button onClick={incrementButtonHandler}>Increment</button>
        </>
    );
}
