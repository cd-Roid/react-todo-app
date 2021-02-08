import React from 'react'
import {useState} from 'react';



function TodoInput() {

    const [newTodo, setNewTodo] = useState('');

    const createTodo = async (e) => {
        e.preventDefault();
        const data = {"text": newTodo, "done": false}
        await fetch('http://localhost:3001',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
    } 

    
    return (
        <div>
            <form  method="post">
             <input type="text"  value={newTodo} onChange= { (e) => setNewTodo(e.target.value)}></input>
             <button onClick={createTodo}>Add</button>
            </form>
        </div>
    )
};

export default TodoInput
