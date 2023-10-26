
import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForms from './components/TodoForms'

function App() {
  const [todos, setTodos] =useState([
    {
      id:1,
      text:"criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted:false

    },
    {
      id:2,
      text:"Ir pra a academia",
      category: "Pessoal",
      isCompleted:false

    },
    {
      id:3,
      text:"Estudar React",
      category: "Estudos",
      isCompleted:false

    },
  ])

  return (
    
   <div className='App'>
    <h1>Lista de tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo)=>(
        // eslint-disable-next-line react/jsx-key
        <Todo key={todo.id} todo={todo}/>
      ))}
    <TodoForms/>
    </div>

   </div>
  )
}

export default App
