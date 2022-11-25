//React Button Toggle
//For this challenge you will be editing a small React application that implements a toggle.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {
    const [isToggleOn, setToggleOn] = useState(true);

    function handleClick() {
        setToggleOn(!isToggleOn);
    }

    return (
        <button
            onClick={handleClick}
        >
            {isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);