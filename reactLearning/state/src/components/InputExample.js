import { useState } from 'react'

function InputExample() {
    const [form, setForm] = useState({ name: '', surname: '' });

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div>
            Name:
            <br />
            <input name='name' value={form.name} onChange={onChange} />
            <br />
            <br />
            Surname:
            <br />
            <input name='surname' value={form.surname} onChange={onChange} />
            <br />
            <br />
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample