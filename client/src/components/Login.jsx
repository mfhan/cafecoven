import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Login = (props) => {

    const {email, password} = props.authFormData;

  return (
    <div>
      <h2>LOG IN</h2>
      <hr />
      <form onSubmit={props.handleLogin}>

        <input
        name="email"
        type="text"
        value={email}
        onChange={props.authHandleChange} />

        <input
        name="password"
        type="password"
        value={password}
        onChange={props.authHandleChange} />

        <button  >Log In</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;
