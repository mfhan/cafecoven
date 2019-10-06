import React  from 'react';
//import {Link } from 'react-router-dom';
import '../App.css';


const Register=(props)=>{
  //object destrcuturing
  const {email, password} = props.authFormData;

  return(
    <div>
      <h2>Register</h2>
      <form onSubmit={props.handleRegister}>
        <input
        type="text"
        name = 'email'
        value={email}
        onChange={props.authHandleChange}
        />
        <input
        type="password"
        name = "password"
        value={password}
        onChange={props.authHandleChange}
        />
        <button>Register</button>
      </form>
    </div>
  )
}


export default Register
