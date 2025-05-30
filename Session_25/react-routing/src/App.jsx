import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
