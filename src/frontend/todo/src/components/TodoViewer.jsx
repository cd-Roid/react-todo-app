import React from 'react';
import {useState, useEffect} from 'react';




function TodoViewer() {

    const [todo, setTodo] = useState([]);

const fetchTodos = async () =>{
    const res = await fetch('http://localhost:3001');
    const data = await res.json();
    console.log(data);
}


    return (
        <div>
            <div>{todo}</div>
            <input type="checkbox"></input>
        </div>
    )
};

export default TodoViewer
