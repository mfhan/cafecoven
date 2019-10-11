import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Login = (props) => {
    console.log('this is props.history from login js', props)

    const {email, password} = props.authFormData;

  return (
    <div>
      <h3>Welcome Back!</h3>
      <h2>LOG IN</h2>
      <hr />
      <form onSubmit={props.handleLogin}>

        <input className = "login"
        name="email"
        type="text"
        value={email}
        onChange={props.authHandleChange} />

        <input className = "login"
        name="password"
        type="password"
        value={password}
        onChange={props.authHandleChange} />

        <button  className = "login">Log In</button>
        <button  className = "login"><Link to="/register"> or Register</Link></button>
      </form>
    </div>
  );
}

export default Login;
