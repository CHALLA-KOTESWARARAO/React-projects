import React,{useState} from "react";
import './App.css'
function App(){
  const[count,setCount]=useState(0)
  const inc=()=>{
    setCount(count+1)
  }
  const dec=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }
  return(
    <div class="main">
      <center>
      <h1>Count:{count}</h1>
    <button onClick={inc}>inc +</button>
    <button onClick={dec}>Dec -</button>
    <button onClick={reset}>Reset</button>
    </center></div>
  )
}
export default App;