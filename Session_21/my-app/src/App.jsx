// import Nav from "./components/Nav.jsx"
// import Profile from './components/Profile.jsx'
import Card from './components/Card.jsx'
const App = () => {
    // let login = true
    return (
    <div className="flex justify-center items-center gap-5 h-screen bg-slate-100">
    {/*{login === true ? <Nav/> : <h1>Not Login</h1>}*/}
    {/*    <Profile name={"Shreekar Sharma"} age={26} location={"India"} profession={"Trainee"}/>*/}
    {/*    <hr/>*/}
    {/*    <Profile name={"Vidush Dixit"} age={25} location={"India"} profession={"React Developer"}/>*/}
        <Card image={"https://images.unsplash.com/photo-1465188035480-cf3a60801ea5"} title={"@kalenemsley"} caption={"High above an azure lake"}/>
        <Card image={"https://images.unsplash.com/photo-1584476345376-44c20ef6587e"} title={"@kevvomatic"} caption={"catch planes"}/>
        <Card image={"https://images.unsplash.com/photo-1623208495534-5e7b2eb77015"} title={"@xiaozhixuan"} caption={"Subway"}/>
        <Card image={"https://images.unsplash.com/photo-1729620489998-058d2d5d439c"} title={"@nacio1966"} caption={"A strange rock wedge in, in another rock."}/>
    </div>
  )
}

export default App
