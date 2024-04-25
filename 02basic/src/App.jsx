import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter]=useState(15)
 
  //let counter=15

  const addValue=()=>{
    //counter=counter+1
    //console.log(counter); 
    setCounter(counter+1)
  }

  const removeValue=()=>{
    //counter=counter+1
    //console.log(counter); 
    setCounter(counter-1)
  }


 

  return (
    <>
      <h1>React App</h1>
      <h2>Counter Value:{counter}</h2>
        <button onClick={addValue}>Add Value</button> {" "} 
        <button onClick={removeValue}>Remove Value</button>
        <h2>Footer:{counter}</h2>
      
    </>
  )
}

export default App
