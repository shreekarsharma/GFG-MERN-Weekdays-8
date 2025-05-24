import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("Mounted");
    setTimeout(() => {
      return console.log("Unmounted");
    }, 2000);
    
  },[count]);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>count is {count}</h1>

      <button onClick={handleClick}>+</button>
    </>
  );
}

export default App;
