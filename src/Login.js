import React, { useState } from 'react'
import './login.css'
const Login = ({isLogin, setIsLogin}) => {
    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const handleLogin = () => {
        if(uname === 'admin@demo' && password === 'admin123')
        {
            setIsLogin(true)
        }
        else setError(true)
    }
  return (
    <div className="container">
    <div className="form-1">
      <h1>AMS3D DEMO</h1>
      <label for="email">User Name</label>
      <input type="email" name="User Name" id="email" value ={uname} required onChange={(e)=>setUname(e.target.value)}/>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" value={password} required onChange={(e)=>setPassword(e.target.value)}/>
      <span>Forgot Password</span>
      {error && <div style={{textAlign: 'center',
    fontWeight: 'bold',
    color: 'red'}}> Invalid Creds</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  </div>
  )
}

export default Login