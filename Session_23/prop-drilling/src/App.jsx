import "./App.css";

import React from 'react'
import Child1 from "./components/Child1";

const App = ({name = 'shreekar'}) => {
  return (
    <div>App
      <Child1 name={name}/>
    </div>
  )
}

export default App
