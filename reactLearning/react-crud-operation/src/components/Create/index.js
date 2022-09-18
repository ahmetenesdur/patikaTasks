import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
    const [content, setContent] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [id, setId] = useState(0);

    const postData = () => {
        axios.post('https://632796839a053ff9aaa7bdc3.mockapi.io/todos', {
            content: content,
            isCompleted: isCompleted,
            id: id
        });
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Content</label>
                    <input placeholder='Content' onChange={(e) => setContent(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='isCompleted' onChange={() => setIsCompleted(!isCompleted)} />
                </Form.Field>
                <Button type='submit' onClick={postData} >Submit</Button>
            </Form>
        </div>
    )
}