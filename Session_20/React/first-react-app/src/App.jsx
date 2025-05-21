import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'

function App() {

  return (
    //   react fragment - anonymous tag
    <>
        <Nav></Nav>
        Hello React
    </>
  )
}

export default App
