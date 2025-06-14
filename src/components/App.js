
import React,{useState} from "react";
import LogedIn from "./LogedIn";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  return (
    <div>
        <h1>Parent component</h1>
      <LogedIn isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
    </div>
  )
}

export default App
