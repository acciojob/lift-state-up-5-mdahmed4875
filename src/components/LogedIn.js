import React from 'react'

export default function LogedIn({loged,setloged}) {
    function handle(e){
        e.preventDefault();
        setloged(true);
    }
    if(loged){
        return <p>you are loged in</p>
    }
  return (
    <div>
      <form onSubmit={handle}>
        <label>Username</label>
        <input type="text"/>
        <br/>
        <label>password</label>
        <input type="password"/>
        <br/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
