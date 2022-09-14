import { useState, useEffect } from 'react'
import './styles.css'

import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullName: 'John Doe', phoneNumber: '081234567890' },
        { fullName: 'Jane Doe', phoneNumber: '081234567891' },
        { fullName: 'Jenny Doe', phoneNumber: '081234567892' },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts