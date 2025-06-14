
import React,{useState} from "react";
import LogedIn from "./LogedIn";
import './../styles/App.css';

const App = () => {
  const [loged,setloged]=useState(false);
  return (
    <div>
        <h1>Parent component</h1>
      <LogedIn loged={loged} setloged={setloged}/>
    </div>
  )
}

export default App
