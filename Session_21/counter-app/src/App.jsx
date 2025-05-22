import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
      setCount(count+1);
  }
  const decreaseCount = () => {
      if(count !== 0){
          setCount(count-1);
      }
  }
  const resetCount = () => {
      setCount(0);
  }
  return (
    <>
      <h1>{count}</h1>
        <div id="buttons">
            <button onClick={increaseCount}><i class="fa-solid fa-plus"></i></button>
            <button onClick={resetCount}><i class="fa-solid fa-power-off"></i></button>
            <button onClick={decreaseCount}><i class="fa-solid fa-minus"></i></button>
        </div>
    </>
  )
}

export default App
