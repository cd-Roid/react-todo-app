import React from 'react';


async function deleteTodo(id) {
    await fetch(`http://localhost:3001/${id}`, {
        method: 'DELETE',
        mode: 'cors',
    });

}


function TodoViewer(todo) {
const {text, done, _id} = todo.todo;

    return (
        <div>
            <div>{text}</div>
            <input type="checkbox" checked={done}></input>
            <i onClick={()=>deleteTodo(_id)}>Delete</i>
        </div>
    )
};

export default TodoViewer
