import { useState } from "react";
import Counter from "./Counter";

function Visible() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            {isVisible && <Counter />}
            <br />
            <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
        </div>
    )
}

export default Visible