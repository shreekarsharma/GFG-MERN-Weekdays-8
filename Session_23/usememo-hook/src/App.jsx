import { useState, useMemo } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);
  const increment  = () => {
    setCount(count+1);
  }
  const sum = () => {
    console.log("Expensive function");
    
    let total = 0;
    for (let index = 0; index < 10000000; index++) {
      total += index;
    }
    return total;
  }
  const result = useMemo(sum,[]);
  return (
    <>
    <h1>{result}</h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={increment}>Increment</button>
      </div>
      <Child/>
    </>
  );
}

export default App;
