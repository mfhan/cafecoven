import React, { Component }  from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Footer from './components/Footer'
import Map from './components/Map'
import UserProfile  from './components/UserProfile'
//import Filter from './components/Filter'
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
      redirect_to_users:false,
      form: {
        username: '',
        phone: '',
        lat: null,
        long: null,
        intro: '',
        days: ''
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
    this.setFormData(currentUser)
    this.setState({ currentUser })
    this.props.history.push(`/edit/${currentUser.id}`)
  }

  handleRegister =  (e) =>{
    e.preventDefault();
    navigator.geolocation.getCurrentPosition( async (position)=> {
      const currentUser = await registerUser({
        ...this.state.authFormData,
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
      this.setFormData(currentUser)
      this.setState({ currentUser })
      this.props.history.push(`/edit/${currentUser.id}`)
    })
  }

  handleVerify = async() => {
    const currentUser = await verifyUser()
    this.setFormData(currentUser)
    this.setState({ currentUser })
  }


  handleLogout=()=>{
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("authToken")
  this.props.history.push('/')
  }

////////////////////// SET USER DATA FORM ////////////////////////


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



  setFormData = (user)=>{
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        username: user.username,
        phone:user.phone,
        intro: user.intro,
        lat: user.lat,
        long: user.long,
        days: user.days
       }
    }))
  }


////////////////////// MAP DATA CHANGES ////////////////////////

    handleChangeLocation =(e)=>{
      e.preventDefault()
      this.setState(prevState =>({
        changingLocation: true
      }))
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

    ////////////////////// FORM DATA CHANGES ////////////////////////

      handleFormChange = (e)=> {
            let {name, value} = e.target;
            this.setState(prevState => ({
              form: {
                ...prevState.form,
                [name]: value
              }
            }))
          }

//onChange={props.handleChange}
//function handleClick(cb) {
//   display("Clicked, new value = " + cb.checked);
// }

////////////////////// DAY-OF-WEEK CHANGES ////////////////////////

      handleCheckBoxChange =(e)=>{
        // assign userDays to a variable
        let userDays = this.state.form.days || '';
        console.log('userDays from start of app.js', userDays)
        const day = e.target.name;
        console.log('day from handleCheckBoxChange in app', day)
        // if this variable contains the day we're looking for
        if (userDays.includes(day)){
          // another implementation: userDays = userDays.replace(day, '')
          userDays = userDays.split("").filter((el)=>{
            return el !== day;
          }).join('');
          // remove it from the variable
        } else {
          userDays += day
          // add it to the variable
        }
        this.setState(prevState => ({
          ...prevState,
          form: {
            ...prevState.form,
            days: userDays
          }
        }));
        // setState of days to new variable
      }

        handleUserFormSubmit = async (e) => {
          e.preventDefault();
          if (this.state.form.lat && this.state.form.long) {
            const data = this.state.form;
            const id = this.state.currentUser.id;
            const updatedUser = await updateUser(data, id);
            console.log(updatedUser)
            // this.setState(prevState =>({
            //   changingLocation: false
            // }))
            // const users = await this.getUsers()
            this.setState(prevState => ({
              redirect_to_users:true,
              users: prevState.users.map(user => user.id=== updatedUser.id ? updatedUser : user )
            }))
            this.props.history.push(`/users`)
          }
          // this.props.history.push('/users')
        }

          // handleFilter =(e)=>{
          //   // assign userDays to a variable
          //   let userDays = this.state.form.days ;
          //   const day = e.target.name;
          //   // if this variable contains the day we're looking for
          //   if (userDays.includes(day)){
          //     // another implementation: userDays = userDays.replace(day, '')
          //     userDays = userDays.split("").filter((el)=>{
          //       return el !== day;
          //     }).join('');
          //     // remove it from the variable
          //   } else {
          //     userDays += day
          //     // add it to the variable
          //   }
          //   this.setState(prevState => ({
          //     ...prevState,
          //     form: {
          //       ...prevState.form,
          //       days: userDays
          //     }
          //   }));
          //   // setState of days to new variable
          // }



    getUsers = async () => {

      const users = await showMatches()
      console.log("users from getUsers", users)
      this.setState({users})
    }

///////////////////////////////////////////////////////////////////
  componentDidMount(){
    this.handleVerify()
    this.getUsers()
    }

  render(){
    let redirect = this.state.redirect_to_users && <Redirect to={"/users"} />
    //in RETURN <login and <Register,
    //authHandleChange= {this.authHandleChange}, NOT this.state.authHandleChange!!!!
    console.log("Appjs render", this.state.currentUser)
    return (
      <div className = 'App'>
        {redirect}
        <div className = 'top-of-site'>

          < Route path = '/login' render={()=>(
            <>
              <Login
                authFormData= {this.state.authFormData}
                authHandleChange= {this.authHandleChange}
                handleLogin ={this.handleLogin}
              />
              <Intro />
            </>

          )} />

          < Route path = '/register' render={()=>(
            <>
            <Register
              authFormData= {this.state.authFormData}
              authHandleChange= {this.authHandleChange}
              handleRegister ={this.handleRegister}
            />
            <Intro />
            </>
          )} />

          < Route exact path = '/' render={()=>(
            <Header
              currentUser = {this.state.currentUser}
              handleLoginButton = {this.handleLoginButton}
              handleLogout = {this.handleLogout}
            />
          )} />

        </div>

        <div className="post-login">
          <Switch>
            <Route path='/edit/:id' render={(props) => (
              <>
                <Header
                  currentUser = {this.state.currentUser}
                  handleLogout = {this.handleLogout}
                />
                <Map
                  users={this.state.users}
                  changingLocation={this.state.changingLocation}
                  mapClick={this.mapClick}
                  handleChangeLocation={this.handleChangeLocation}
                  currentUser={this.state.currentUser}
                  form={this.state.form}
                />
                <UserProfile
                  {...props}
                  currentUser = {this.state.currentUser}
                  form={this.state.form}
                  handleChange={this.handleFormChange}
                  handleChangeLocation={this.handleChangeLocation}
                  handleSubmit={this.handleUserFormSubmit}
                  handleCheckBoxChange={this.handleCheckBoxChange} />
                </>)}
              />

            <Route path='/users' render={(props) => (
              <>
              <Header
                currentUser = {this.state.currentUser}
                handleLogout = {this.handleLogout}
              />
               <Map
                 users={this.state.users}
                 changingLocation={this.state.changingLocation}
                 mapClick={this.mapClick}
                 currentUser={this.state.currentUser}
                 form={this.state.form}
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


//
// <Filter
//   users={this.state.users}
//   mapClick={this.mapClick}
//   currentUser={this.state.currentUser}
//   form={this.state.form}
// />

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
