import './App.css';
import TodoInput from './components/TodoInput';
import TodoViewer from './components/TodoViewer';
import {useState, useEffect} from 'react';


function App() {

  const [todo, setTodo] = useState([]);

  const fetchTodos = async () => { 
      const res = await fetch('http://localhost:3001');
      const data = await res.json();
      setTodo(data);
  }
  
const  deleteTodo = async (id)  => {
  await fetch(`http://localhost:3001/${id}`, {
      method: 'DELETE',
      mode: 'cors',
  });

  const createTodo = async () => {
    
  }
}

  useEffect(()=>{
      console.log("use Effect running");
      fetchTodos();
  },[])


  return (
    <div>
      {
        todo.map(todo => <TodoViewer todo ={ todo } deleteTodo = {deleteTodo} />)
      }
      <TodoInput/>
    </div>
  );
}

export default App;
