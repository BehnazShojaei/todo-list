import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';



function App() {

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      iscompleted: false,
    }, {
      text: "Meet friend for lunch",
      iscompleted: false,
    }, {
      text: "Build really cool todo app",
      iscompleted: false,
    }

  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].iscompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1 className='todo-list'>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} />

      ))}

      <TodoForm addTodo={addTodo} />

    </div>
  );

}

export default App;


