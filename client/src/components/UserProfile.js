import React, {Component} from 'react';
import '../App.css';
import CheckBox from './CheckBox'
// import Map from './components/Map'

// setstate with what's already there
//OR fetch via getconstructor(props) {
//MAYBE: onClose={() => this.setState()}

const UserProfile = (props) => {

  const userForm = () => {
      return Object.keys(props.form).map((key) => {
        switch(key) {
          case 'id':
          case 'prevlat':
          case 'prevlong':
          case 'createdAt':
          case 'updatedAt':
            return <></>
          case 'username':
            return <>
            <div className = "box">
              <label htmlFor={key}>{key}:</label>
              <input
                required
                type="text"
                name={key}
                value={props.form[key] }
                onChange={props.handleChange}
              />
            </div>
            </>
          case 'lat':
            return <>
              <div className = "box">
                <label htmlFor={key}>{key}:</label>
                <input
                  disabled
                  type="number"
                  step="any"
                  name={key}
                  value={props.form[key]}
                  onChange={props.handleChange}
                />
              </div>
              </>
            case 'long':
            return <>
              <div className = "box">
                <label htmlFor={key}>{key}:</label>
                <input
                  disabled
                  type="number"
                  step="any"
                  name={key}
                  value={props.form[key]}
                  onChange={props.handleChange}
                />
             </div>
             </>
            case 'days':
              return <CheckBox
                days = {props.form.days || ''}
                currentUser = {props.currentUser}
                handleCheckBoxChange = {props.handleCheckBoxChange}
                />
        default:
            return <>
              <div className = "box">
                <label htmlFor={key}>{key}:</label>
                <input
                  type="text"
                  name={key}
                  value={props.form[key] }
                  onChange={props.handleChange}
                />
              </div>
             </>
        }
    });
  }

  if (props.currentUser) {
    return (
      <>
      <button className="mapchange-button"  onClick={props.handleChangeLocation}>CHANGE YOUR LOCATION ON THE MAP</button>

        <h3 className = "profile">Help WorkHaven help you! <br />The more details you add on your profile, the better our database and the higher your odds of finding a co-worker near you!<br/>
        Make sure EVERY portion of this form is accurate! </h3>

        <div > {userForm()}</div>

        <button  className="nav-button"  onClick={props.handleSubmit} > Confirm </button>
      </>
    )
  } else {
    return (<h2> No current user.</h2>)
  };

};

export default UserProfile;

// props.form.lat ? "40.753345,"
// props.form.long ? "-73.9841719"

// <>
//   <h2 className = "main-content">Create or Update Your Data</h2>
//   <button className="content-button"  onClick={props.handleChangeLocation} >CHANGE LOCATION</button>
//
//     {mapForm()}
//
//   <button  className="content-button"  onClick={props.handleSubmit} >Submit</button>
//
// </>
// )
// } else {
// return <h1>No current user.</h1>
// }


// <button onClick= {() => {
//     this.setState({ })
//   }} >UPDATE ALL</button>

//class UserProfile extends Component {
// constructor(props){
//   super(props)
  // this.state = {
  //   username: currentUser.username,
  //   phone: currentUser.phone,
  //   lat: currentUser.lat,
  //   long: currentUser.long,
  //   intro: currentUser.intro
  // }
// }

//
// case 'lat':
// case 'long':
// return <>
//   <label htmlFor={key}>{key}:</label>
//   <input
//     type="text"
//     step="any"
//     name={key}
//     value={props.form[key] }
//     onChange={props.handleChange}
//   />
//
// case 'prevlat':
// return <>
//   <label htmlFor={key}>{key}:</label>
//   <input
//     type="text"
//     step="any"
//     name={key}
//     value={ props.form.prevlat ?  props.form.prevlat : props.form.lat }
//   />
//   </>
//   case 'prevlong':
//   return <>
//     <label htmlFor={key}>{key}:</label>
//     <input
//       type="text"
//       step="any"
//       name={key}
//       value={props.form.prevlong ?  props.form.prevlong : props.form.long}
//     />
//   </>
