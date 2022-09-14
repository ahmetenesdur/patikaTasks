import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("component mounted");

        setInterval(() => {
            setNumber((n) => n + 1);
        }, 1000);

        return () => {
            console.log("component unmounted");
        }
    }, []);

    useEffect(() => {
        console.log("number state changed");
    }, [number]);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    );
}

export default Counter