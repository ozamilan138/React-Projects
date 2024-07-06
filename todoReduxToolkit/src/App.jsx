import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'


function App() {
  

  return (
   <>
   <h1 className='text-center font-extrabold text-3xl mt-3'>Todo Using Redux Toolkit</h1>
   
   <AddTodo></AddTodo>
   <TodoList></TodoList>
   
   </>
  )
}

export default App
