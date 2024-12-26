import { useState } from "react";
import "./Counter.css";
import KillCounter from "./KillCounter";

export default function Counter() {
    const [count, setCount] = useState(0);
debugger;
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

    const countText = count >= 0 ? `Positive ${count}`: `Negative ${count}`;
    const textStyle = count >= 0 ? 'lightgreen' : 'red';

    return (
        <>
            <h2>Counter</h2>
            <KillCounter count={count}/>

            <p className={textStyle}>{countText}</p>
            {count > -10 && <button onClick={decrementButtonHandler}>Decrement</button>}
            <button onClick={resetButtonHandler}>Reset</button>
            {count < 10 && <button onClick={incrementButtonHandler}>Increment</button>}
        </>
    );
}
