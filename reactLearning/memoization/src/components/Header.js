import React from 'react'

function Header({ count, increment }) {
    console.log('Header rendered');

    return (
        <div>
            Header - {count}
            <br />
            <br />

            {/* <code>{JSON.stringify(data)}</code> */}

            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default React.memo(Header);