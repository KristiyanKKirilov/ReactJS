import { useState, useEffect } from "react";

export default function FancyTimer() {
    const [time, setTime] = useState(0);

    useEffect(() =>{
        setInterval(() =>{
            setTime(oldTime => oldTime + 1);
        }, 1000);
    }, []);


    const addSecondsHandler = () => {
        setTime((prevTime) => prevTime + 10);
    }

    return (
        <>
            <h1>Timer</h1>
            <p>{time}</p>
            <button onClick={addSecondsHandler}>Add seconds</button>
        </>
    );
}
