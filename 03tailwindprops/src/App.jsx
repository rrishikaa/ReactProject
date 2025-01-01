import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj={
    username: "Rishika",
    age: 22
  }

  let newArr= [1,2,3]

  return (
    <>
      
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl my-4' > Tailwind Test</h1>

      <Cards username ="Rishika"  btnTxt ="Click Me"/>
      <Cards username ="Dhruv" btnTxt = "Visit Me"/>
    </>
  )
}

export default App