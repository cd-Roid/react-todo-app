import {React, useState, useEffect} from 'react';



function TodoViewer(todo) {
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

useEffect(()=>{
    console.log("use Effect running in Viewer");
},[doneStatus])


const  deleteTodo = async ()  => {
    const {_id} = todo.todo;
    await fetch(`http://localhost:3001/${_id}`, {
        method: 'DELETE',
        mode: 'cors',
    });
  }

    return (
        <div>
            <div>{text}</div>
            <input type="checkbox" checked={done} onClick={setDoneStatus}></input>
            <i onClick={deleteTodo}>Delete</i>
        </div>
    )
};

export default TodoViewer
