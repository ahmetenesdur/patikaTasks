import { useEffect, useState } from 'react'

const initialFormValue = { fullName: '', phoneNumber: '' };

function Form({ addContacts, contacts }) {
    const [form, setForm] = useState(initialFormValue);

    useEffect(() => {
        setForm(initialFormValue);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullName === '' || form.phoneNumber === '') {
            alert('Please fill in all fields');
        }

        addContacts([...contacts, form]);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='fullName'
                    placeholder='Full Name'
                    value={form.fullName}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    name='phoneNumber'
                    placeholder='Phone Number'
                    value={form.phoneNumber}
                    onChange={onChangeInput}
                />
            </div>

            <div className='button'>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form