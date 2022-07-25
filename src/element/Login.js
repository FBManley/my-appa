import React, { useState } from 'react'

const LogIn = () => {
const [username, setUsername] = useState([])
const [password, setPassword] = useState([])

function handleusernameChange(e)  {
  setUsername(e.target.value)
}
function handlepasswordChange(e) {
  setPassword(e.target.value)
}
function handleSubmit(e){
  e.preventDefault();
  //post to db.json???
}
  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleusernameChange} value={username}></input>
        <input type="text" name="password" placeholder="Password" onChange={handlepasswordChange} value={password}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default LogIn;