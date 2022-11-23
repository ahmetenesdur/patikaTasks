import React from 'react';
import './Requirements.module.css';

export const Requirements = () => {
    return (
        <div>
            <button>Click Me</button>
            <button
                disabled = {true}
            >
                Click Me
            </button>
        </div>
    )
}