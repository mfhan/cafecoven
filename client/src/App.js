import React, { Component }  from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import { withRouter } from 'react-router';
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import UserProfile  from './components/UserProfile'
import MatchList  from './components/MatchList'
import SingleMatch  from './components/SingleMatch'
import './App.css';
import {
  loginUser, registerUser, verifyUser, updateUser, showMatches, showOneMatch
} from './services/api-helper'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      // artists: [],
      form: {
        username: '',
        lat: '',
        long: '',
        intro: ''
      },
      mapLat:null,
      mapLong:null,
      clicked:false,

      login: {
        username: '',
        password: '',
      },
      register: {
        username: '',
        email: '',
        password: '',
      },
      authFormData: {
        email: '',
        password: ''
      }
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


  handleLoginButton = () => {
       console.log('props from login/register button', this.props)
       this.props.history.push("/login");
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

///////////////////////////////////////////////////////////////////////
////////////////////// MAP & USER DATA CHANGES ////////////////////////

    changeUserForm = async (e) => {
      e.preventDefault();
      const { id, ...data } = this.state.form;
      const user = await updateUser(data, id)
      this.setState((prevState) => ({
        users: [...prevState.users.filter((comp) => comp.id !== id), user]
      }));
      console.log(user)
      this.props.history.push('/')
    }

///////////////////////////////////////////////////////////////////

  componentDidMount(){
    this.handleVerify()
    }


  render(){
    //in RETURN <login and <Register,
    //authHandleChange= {this.authHandleChange}, NOT this.state.authHandleChange!!!!

    return (
      <div className = 'App'>
        <Header
          currentUser = {this.state.currentUser}
          handleLoginButton = {this.handleLoginButton}
          handleLogout = {this.handleLogout}
        />

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

          <Switch>

        <Route path='/edit/:id' render={(props) => (
            <UserProfile
              {...props}
              currentUser = {this.state.currentUser}
              form={this.state.form}
              handleChange={this.handleChange}
              handleChangeLocation={this.handleChangeLocation}
              handleSubmit={this.changeUserForm}

               /> )}
         />
         <Route path='/about' component={About} />
         </Switch>
         <Footer />

      </div>

    );
  }
}

export default App;


// <Route exact path='/' render={(props) => (
//   <>
//     <ArtistList
//        {...props}
//        artists={this.state.artists}
//      />
//   </> )}
//   />
