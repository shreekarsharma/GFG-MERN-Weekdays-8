import { createContext } from "react";
import "./App.css";
import Child from "./components/Child";
export const postman = createContext();
function App() {
  const data = {
    name: "shreekar",
    age: 26,
  };
  return (
    <postman.Provider value={data}>
      <>
        <p>Parent</p>
        <Child />
      </>
    </postman.Provider>
  );
}

export default App;
