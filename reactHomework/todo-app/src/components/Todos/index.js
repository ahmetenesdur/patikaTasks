import React, { useEffect, useState } from 'react'

import Form from './Form'
import List from './List'
import Footer from './Footer'
import './styles.css'

function Todo() {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || [
            { input: 'Learn React', completed: false },
            { input: 'Learn Firebase', completed: true },
            { input: 'Learn GraphQL', completed: false },
        ]
    )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('todos', todos)
    }, [todos])

    return (
        <section className='todoapp'>

            <header className='header'>
                <h1>todos</h1>
                <Form addTodos={setTodos} todos={todos} />
            </header>

            <section className='main'>
            <List />
            </section>


            <Footer />
        </section>
    )
}

export default Todo;