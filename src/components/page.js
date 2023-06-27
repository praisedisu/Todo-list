import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import "./page.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function Page() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    function submit(){
        const itemArray = getSaveditemFromLocalStorage()
        itemArray.push(items)
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems
        (items);
    }
    };

            function getSaveditemFromLocalStorage() {
                let items = localStorage.getItem("items")
                if (!items) {
                    items = []
                } else {
                    items = JSON.parse(items)
                }
                return items
                }


  return (
    <div className='container'>
        <h2 className='head-text'>Todo List App</h2>
        <Form>
            <Form.Control type='text' className='mt-3' placeholder='Enter Todo item' 
                onChange={event => setItems(event.target.value)}
            ></Form.Control>

            <Button variant='primary' className='mt-4' onClick={submit}>Add</Button>

        </Form>
        <FormGroup className='my-4'>
            <Table className='table'>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr><td><input type="checkbox" className="form-check-input" /></td>
                    <td>{items}</td>
                    <td><Button variant='secondary'>Edit</Button></td>
                    <td><Button variant='danger' >remove</Button></td></tr>
                </tbody>
            </Table>
        </FormGroup>
    </div>
  )
}

export default Page