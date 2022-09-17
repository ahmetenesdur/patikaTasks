import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => setUsers(data))
    //         .catch(error => console.log(error))
    //         .finally(() => setLoading(false))
    // }, [])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))}
        </div>
    )
}

export default Users