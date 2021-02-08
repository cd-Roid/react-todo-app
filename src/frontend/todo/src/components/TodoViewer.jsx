import {React, useState} from 'react';



function TodoViewer(todo, deleteTodo) {

const {text, done, _id} = todo.todo;
const [doneStatus, setDone] = useState(done);    

const setDoneStatus = async () => {
    let data = {"done": doneStatus}
    console.log(data);
    await fetch(`http://localhost:3001/${_id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    setDone(!done); 
}

    return (
        <div>
            <div>{text}</div>
            <input type="checkbox" checked={done} onClick={setDoneStatus}></input>
            <i onClick={()=>deleteTodo(_id)}>Delete</i>
        </div>
    )
};

export default TodoViewer
