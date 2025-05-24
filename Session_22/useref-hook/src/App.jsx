import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  let para = useRef();
  console.log(para);
  
  function change(){
    val.current++;
    console.log(val.current);
    
    setCount(count+1)

    para.current.textContent = val.current;
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={change}>
        PLUS
      </button>
      <p ref={para}></p>
    </>
  );
}

export default App;
