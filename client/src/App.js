import React, { Component }  from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import NewHeader from './components/NewHeader'
import About from './components/About'
import Footer from './components/Footer'
import Map from './components/Map'
//import NewMap from './components/NewMap'
import UserProfile  from './components/UserProfile'
// import MatchList  from './components/MatchList'
// import SingleMatch  from './components/SingleMatch'
import './App.css';
import {
  loginUser, registerUser, verifyUser, updateUser, showMatches
} from './services/api-helper'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      users: [],
      form: {
        username: '',
        phone: '',
        lat: null,
        long: null,
        intro: ''
      },
      changedData: false,
      mapLat:null,
      mapLong:null,
      clicked:false,

      login: {
        email: '',
        password: '',
      },
      register: {
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

  handleRegister =  (e) =>{
    e.preventDefault();
    navigator.geolocation.getCurrentPosition( async (position)=> {
      const currentUser = await registerUser({
        ...this.state.authFormData,
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
      this.setState({ currentUser })
    })
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
  this.props.history.push('/')
  }



///////////////////////////////////////////////////////////////////////
////////////////////// MAP & USER DATA CHANGES ////////////////////////


  handleFormChange = (e)=> {
        let {name, value} = e.target;

        this.setState(prevState => ({
          form: {
            ...prevState.form,
            [name]: value
          }
        }))
      }


    handleUserFormSubmit = async (e) => {
      e.preventDefault();
      const data = this.state.form;
      const id = this.state.currentUser.id;
      const user = await updateUser(data, id);
      console.log(user)
      // this.setState(prevState =>({
      //   changingLocation: false
      // }))
      const users = await this.getUsers()
      console.log(users)
      this.props.history.push('/users')
    }


    handleChangeLocation =(e)=>{
      e.preventDefault()
      this.setState(prevState =>({
        changingLocation: true
      }))
    }

    setPosition=()=>{
      const watchId = navigator.geolocation.getCurrentPosition((position)=> {
        console.log(position.coords)
        this.setState(prevState => ({
            form: {
              ...prevState.form,
              lat: position.coords.latitude,
              long: position.coords.longitude
            }
          }))
      })
      // console.log(watchId)
    }

    mapClick =(map, e)=> {
        console.log('this is mapClick', map)
        this.setState(prevState => ({
            form: {
              ...prevState.form,
              lat: map.lngLat[1],
              long: map.lngLat[0],
            }
          }))
    }

    getUsers = async () => {
      console.log('getUsers after form click')
      const users = await showMatches()
      console.log("users from getUsers", users)
      this.setState({users})
    }


///////////////////////////////////////////////////////////////////

  componentDidMount(){
    this.handleVerify()
    this.getUsers()
    this.setPosition()
    }


  render(){
    //in RETURN <login and <Register,
    //authHandleChange= {this.authHandleChange}, NOT this.state.authHandleChange!!!!
console.log("from App.js render", this.state.currentUser)
    return (
      <div className = 'App'>
        <div className = 'top-of-site'>

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

        <Header
          currentUser = {this.state.currentUser}
          handleLoginButton = {this.handleLoginButton}
          handleLogout = {this.handleLogout}
        />
        </div>

        <div className="post-login">
          <Switch>

            <Route path='/edit/:id' render={(props) => (
              <>
              <Map
                users={this.state.users}
                changingLocation={this.state.changingLocation}
                mapClick={this.mapClick}
              />
              <UserProfile
                {...props}
                currentUser = {this.state.currentUser}
                form={this.state.form}
                handleChange={this.handleFormChange}
                handleChangeLocation={this.handleChangeLocation}
                handleSubmit={this.handleUserFormSubmit} />
              </>)}
            />


              <Route path='/users' render={(props) => (
                <>
                 <Map
                   users={this.state.users}
                   changingLocation={this.state.changingLocation}
                   mapClick={this.mapClick}
                 />
                </> )}
              />

            <Route path='/about' component={About} />
            </Switch>

         </div>
         <Footer />

      </div>

    );
  }
}

export default withRouter(App);



// getUsers = async () => {
//   const users = await showMatches()
//   console.log("users from getUsers", users)
//   this.setState({ users })
// }

// <Route exact path='/' render={(props) => (
//   <>
//     <ArtistList
//        {...props}
//        artists={this.state.artists}
//      />
//   </> )}
//   />
// this.setState((prevState) => ({
//   users: [...prevState.users.filter((comp) => comp.id !== id), user]
// }));

//
// formHandleChange = (e)=> {
//       let {name, value} = e.target;
//       if (name === 'lat' || name === 'long') {
//         value = parseFloat(value);
//       }
//       this.setState(prevState => ({
//         form: {
//           ...prevState.form,
//           [name]: value
//         }
//       }))
//     }


  //changedData = {this.state.changedData}


      //
      // handleUserFormSubmit = async (e) => {
      //   e.preventDefault();
      //   const data = this.state.form;
      //   const id = this.state.currentUser.id;
      //   const user = await updateUser(data, id);
      //   this.state.changedData= true
      //   console.log(user)
      //   this.props.history.push('/users')
      // }

          //
          //
          // mapClick =(map, e)=> {
          //   if (!this.state.changingLocation) {
          //     return;
          //   }
          //     console.log('this is mapClick', map)
          //     this.setState(prevState => ({
          //         form: {
          //           ...prevState.form,
          //           lat: map.lngLat[1],
          //           long: map.lngLat[0],
          //         },
          //         changingLocation: false
          //       }))
          // }
