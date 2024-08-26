import React, {useContext, useState} from 'react'
import UserContext from '../Context/useContext'

function Login() {
    const {setUser} = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
        <h1>login</h1>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
        {"  "}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login