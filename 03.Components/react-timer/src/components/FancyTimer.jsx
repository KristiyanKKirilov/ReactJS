import { useState, useEffect } from "react";
import styles from './FancyTimer.module.css';

export default function FancyTimer() {
    const [time, setTime] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setTime(oldTime => oldTime + 1);
            console.log('interval');
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);


    const addSecondsHandler = () => {
        setTime((prevTime) => prevTime + 10);
    }

    return (
        <>
            <h1 className={styles['timer']}>Fancy Timer</h1>
            <p>{time}</p>
            <button onClick={addSecondsHandler}>Add seconds</button>
        </>
    );
}
