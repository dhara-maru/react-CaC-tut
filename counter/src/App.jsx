import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, dharaCounter] = useState(15)

 // let counter = 5;

  const addvalue = ()=>{
   //console.log(counter);
    //counter++;
    if(counter >= 20){
      counter = 20;
    }
    else{
      dharaCounter(counter+1)
    }
    
  }

  const removevalue = ()=>{
    if(counter <= 0){
      counter =0;
    }
    else{
      dharaCounter(counter-1)
    }
    
  }
  return (
    <>
     <h1>Chai Code React</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addvalue}>Increase</button>

     <br /><br />
     <button onClick={removevalue}>Decrease</button>
    </>
  )
}

export default App
