import React from 'react'

export default function LogedIn({isLoggedIn,setisLoggedIn}) {
    function handle(e){
        e.preventDefault();
        setisLoggedIn(true);
    }
    if(isLoggedIn){
        return <p>you are loged in</p>
    }
  return (
    <div>
      <form onSubmit={handle}>
        <label>Username:</label>
        <input type="text"/>
        <br/>
        <label>password:</label>
        <input type="password"/>
        <br/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
