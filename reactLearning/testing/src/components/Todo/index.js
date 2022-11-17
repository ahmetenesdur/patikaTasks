import { useState } from 'react'

function Todo() {
    const [text, setText] = useState('')
    const [items, setItems] = useState([
        { text: 'Learn React' },
        { text: 'Learn Next.js' },
        { text: 'Learn GraphQL' },
    ])

    const addItem = () => {
        setItems([...items, { text }])
        setText('')
    }

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={addItem}>Add</button>

            <br />
            <br />

            {items.map((item, key) => <div key={key}>{item.text}</div>)}
        </div>
    )
}

export default Todo