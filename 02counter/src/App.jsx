import { useState } from 'react'



function App() {
    //let Counter = 20

    let [counter , setCounter]= useState(15)

    const addValue = () => {
      // Only increase counter if it is less than 20
      if (counter < 20) {
        setCounter(prevcounter => prevcounter + 1);	
        setCounter(prevcounter => prevcounter + 1);	
        setCounter(prevcounter => prevcounter + 1);	
        setCounter(prevcounter => prevcounter + 1);	
      }
  }


  const removeValue = () => {
    // Only decrease counter if it is greater than 0
    if (counter > 0) {
        setCounter(counter - 1);
    }
} 
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick ={addValue}>Add Button {counter}</button>
      <br/>
      <button onClick ={removeValue}>Remove Button {counter}</button>
      
    </>
  )
}

export default App
