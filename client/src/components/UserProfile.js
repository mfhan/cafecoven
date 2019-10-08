import React, {Component} from 'react';
// import Map from './components/Map'

class UserProfile extends Component {
  /////setstate with what's already
  //fetch via getconstructor(props) {
  constructor(props){
    super(props)
    // this.state = {
    //   username: currentUser.username,
    //   phone: currentUser.phone,
    //   lat: currentUser.lat,
    //   long: currentUser.long,
    //   intro: currentUser.intro
    // }
  }

  const mapForm = () => {
    return Object.keys(props.form).map((key) => {
      switch(key) {
        case 'id':
        case 'createdAt':
        case 'updatedAt':
          return <></>
        case 'lat':
        case 'long':
        return <>
          <label htmlFor={key}>{key}:</label>
          <input
            type="text"
            step="any"
            name={key}
            value={props.form[key] }
            onChange={props.handleChange}
          />
        </>
        default:
          return <>
            <label htmlFor={key}>{key}:</label>
            <input
              type="text"
              name={key} 
              value={props.form[key] }
              onChange={props.handleChange}
            />
          </>
      }
    });
  }
  if (props.currentUser) {
    return (
      <>
        <h2 className = "main-content">Create or Update Your Data</h2>
        <button className="content-button"  onClick={props.handleChangeLocation} >CHANGE LOCATION</button>

         {mapForm()}

        <button  className="content-button"  onClick={props.handleSubmit} >Submit</button>

      </>
    )
  } else {
    return <h1>No current user.</h1>
  }
};
export default UserProfile;

// <button onClick= {() => {
//     this.setState({ })
//   }} >UPDATE ALL</button>

// <input
//   type="text"
//   name={key}
//   value={props.form[key] || currentUser.key }
//   onChange={props.handleChange}
// />
