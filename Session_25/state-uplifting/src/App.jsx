import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Child1 from './components/Child1';

function App() {
  const [name, setName] = useState('');

  return (
    <>
    <Card name={name} setName={setName}/>
    <Child1 name={name}/>
    <p>This is name comming from child: {name}</p>
    </>
  )
}

export default App
