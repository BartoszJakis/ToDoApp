import { useState, ChangeEvent } from 'react'

import './App.css'
import { ITodo } from './types'
import { Todos } from './Todo'

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [input, setInput] = useState('')


  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
setInput(e.target.value)
}

const addTask = (): void => {
  const newTodo = {text: input, completed: false, id: todos.length};
setTodos([...todos, newTodo ]);
};

const deleteTask = (id: number): void => {
  setTodos(todos.filter((todo: ITodo) => todo.id !== id));
}


  return (
  <div className="App">
    <div className="header">
      <input type="text" placeholder="Add a todo" onChange ={handleChange}  />
      <button  onClick={addTask}>Add</button>
    </div>
    <div className="toDoList">
   
      {todos.map((todos : ITodo, key : number ) =>
      {
        return <Todos key ={key} todos={todos}  deleteTodo={deleteTask} />

      })}
      
      </div>





  </div>)
}

export default App;
