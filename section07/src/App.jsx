import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import "./App.css";
import {useState, useEffect, useRef} from "react";


function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);
  console.log("App:"+count);
  useEffect(()=>{
    console.log("mount");
  },[]);

  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      return;
    }
    console.log("update");
    console.log("useEffect:"+count); 
  });
  const onClickButton=(value)=>{
    setCount(count+value);
    console.log("setCount:"+count); 
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App;
