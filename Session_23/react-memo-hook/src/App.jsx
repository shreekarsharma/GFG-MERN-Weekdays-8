import { useCallback, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  console.log("App component");
  
  const [count, setCount] = useState(0);
  const increment = () => {
    console.log('increment function called');
    
    setCount(count + 1);
  };
  const increment1 = () => {
    console.log('increment1 function called');
  };
  const funcVal = useCallback(increment1,[])
  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={increment}>Increment</button>
      </div>
      <Child increment={funcVal}/>
    </>
  );
}

export default App;
