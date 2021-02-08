import './App.css';
import TodoViewer from './components/TodoViewer';
import {useState, useEffect} from 'react';


function App() {

  const [todo, setTodo] = useState([]);

  const fetchTodos = async () =>{ 
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
        todo.map(todo => <TodoViewer todo ={ todo }/>)
      }
    </div>
  );
}

export default App;
