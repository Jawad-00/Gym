import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Register from './components/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register/>
    </>
  )
}

export default App
