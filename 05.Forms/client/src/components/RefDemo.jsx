import { useState, useRef, useEffect } from "react";

export default function RefDemo() {
  const [count, setCount] = useState(0);
  const initialRenderRef = useRef(true);

  useEffect(() => {
    if (initialRenderRef.current) {
      console.log("Initial render");
      initialRenderRef.current = false;
    } else {
      console.log("Update");
    }
  }, [count]);

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => (initialRenderRef.current = true)}>Reset</button>
    </>
  );
}
