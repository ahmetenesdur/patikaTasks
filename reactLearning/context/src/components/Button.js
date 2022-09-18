import React, { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

function Button() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            Active theme: {theme}
            <div>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
            </div>
        </div>
    )
}

export default Button