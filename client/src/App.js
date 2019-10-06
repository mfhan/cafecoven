import React, { Component }  from 'react';
import { Route, Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import Login from './components/Login'
import Register from './components/Register'
import './App.css';
import {
  loginUser, registerUser, verifyUser
} from './services/api-helper'


class App extends Component {

  state = {
    authFormData: {
      email: '',
      password: ''
    }
  }

  ///////////////////////////// AUTH /////////////////////////////

  //using the JS SPREAD operator to isolate the "NAME" of the data and its VALUE
  authHandleChange = (e)=> {
      const {name, value} = e.target;
      this.setState(prevState => ({
        authFormData: {
          ...prevState.authFormData,
          [name]: value
        }
      }))
    }


  handleLogin = async (e) =>{
    e.preventDefault();
    const currentUser = await loginUser(this.state.authFormData)
    this.setState({ currentUser })
  }

  handleRegister =  async (e) =>{
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({ currentUser })
  }

  handleVerify = async() => {
    const currentUser = await verifyUser()
    this.setState({ currentUser })
  }


  handleLogout=()=>{
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("authToken")
  }


  componentDidMount(){
    this.handleVerify()
    }


  render(){
    //in RETURN <login and <Register,
    //authHandleChange= {this.authHandleChange}, NOT this.state.authHandleChange!!!!

    return (
      <div className = 'App'>
        <header>
          <Link to = '/'><h1>Welcome to WorkHaven!</h1> </Link>
          { this.state.currentUser
            ?
            <>
            <p>Let's get to work, {this.state.currentUser.email}</p>
            <button onClick= {this.handleLogout}>Log Out</button>
            </>
            :
            <Link to = '/login'><button>Log In/Register</button></Link>
          }
        </header>

        < Route path = '/login' render={()=>(
          <Login
            authFormData= {this.state.authFormData}
            authHandleChange= {this.authHandleChange}
            handleLogin ={this.handleLogin}
          />
        )} />

        < Route path = '/register' render={()=>(
          <Register
            authFormData= {this.state.authFormData}
            authHandleChange= {this.authHandleChange}
            handleRegister ={this.handleRegister}
          />
        )} />

      </div>

    );
  }
}

export default App;
