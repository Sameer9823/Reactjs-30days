import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  if (count <= 25 && count >= 0) {
   
  } else {
    setCount(25)
  }

  return (
    <>
    <button onClick={() => {setCount(count + 1)}}>inc</button>
     <h1>Counter value :{count}</h1>
    <button onClick={() => {setCount(Math.max(count - 1,0))}}>dec</button>
    <Card username="geet" btn='click-me' />
    <Card username="vaish"/>
    </>
  )
}

export default App

