import './App.css'
import {useState} from "react";
import HookExam from "./components/HookExam.jsx";

function App() { 
  return (
    <>
      <HookExam/>
    </>
  )
    
  // return <>
  //   <h1>{light}</h1>
  //   <button onClick={()=>{
  //     setLight(light==="ON" ? "OFF" : "ON");
  //   }}>{light === "ON" ? "켜기" : "끄기"}</button>18
  //   <h1>{state}</h1>
  //   <button onClick={()=>{ 
  //     setState(state+1);
  //   }}>+</button>
  // </>;
  
}

export default App
 