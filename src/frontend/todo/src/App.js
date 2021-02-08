import './App.css';
import TodoInput from './components/TodoInput';
import TodoViewer from './components/TodoViewer';
import {useState, useEffect} from 'react';


function App() {

  const [todos, setTodo] = useState([]);  
  
  const fetchTodos = async () => { 
      const res = await fetch('http://localhost:3001');
      const data = await res.json();
      setTodo(data);
  }

  useEffect(()=>{
      console.log("use Effect running");
      fetchTodos();
  },[])


  return (
    <div>
      {
        todos.map(todo => <TodoViewer todo ={ todo } key={todo._id}/>)
      }
      <TodoInput/>
    </div>
  );
}

export default App;
