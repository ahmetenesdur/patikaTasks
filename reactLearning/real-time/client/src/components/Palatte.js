import { useState } from 'react'

import { send } from '../services/socketApi';

function Palatte({ activeColor }) {
    const [color, setColor] = useState('#000000');

    return (
        <div className="palette">
            <input
                type="color"
                value={activeColor}
                onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={() => send(color)}>
                Send
            </button>
            {color}
        </div>
    )
}

export default Palatte