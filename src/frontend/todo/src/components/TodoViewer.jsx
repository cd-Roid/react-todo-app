import React from 'react';





function TodoViewer(todo) {
const {text, done} = todo.todo;

    return (
        <div>
            <div>{text}</div>
            <input type="checkbox"></input>
        </div>
    )
};

export default TodoViewer
