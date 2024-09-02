import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/todo'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold'>TodoApp</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
