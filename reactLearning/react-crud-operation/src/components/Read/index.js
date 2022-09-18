import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('https://632796839a053ff9aaa7bdc3.mockapi.io/todos')
            .then(({ data }) => {
                setAPIData(data);
            })
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Content</Table.HeaderCell>
                        <Table.HeaderCell>IsCompleted</Table.HeaderCell>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.content}</Table.Cell>
                                <Table.Cell>{data.isCompleted ? 'true' : 'false'}</Table.Cell>
                                <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>
                                        <Button>Update</Button>
                                    </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}