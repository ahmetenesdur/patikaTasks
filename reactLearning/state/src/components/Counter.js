import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrease</button>
            <button onClick={increment}>Increase</button>
        </div>
    )
}

export default Counter