import React, { useState } from 'react';
import './App.css';
import { InputFeild } from './componets/InputFeild';
import { Todo } from './componets/model';
import TodoList from './componets/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputFeild>
     
    <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
