import React from 'react';




function TodoViewer(todo, deleteTodo) {
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
