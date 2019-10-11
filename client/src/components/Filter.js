import React, {Component}  from 'react';
import '../App.css';



class Filter extends Component {
  constructor(props){
    super(props)

  this.state = {
    users: this.props.users,
    currentUser: this.props.currentUser,
    viewport: {
      latitude: this.props.currentUser ? this.props.currentUser.lat : 40.753345,
      longitude: this.props.currentUser ? this.props.currentUser.long : -73.9841719,
      zoom:14,
      minZoom: 10,
      maxZoom: 20,
      bearing: 0,
      pitch: 0
    },
    userpin:[],
    pins: [],
    popupInfo: null
  };
}


  const users
  const daysOfTheWeek = 'mtwrfsu';
  console.log(userDays);
//<input type="checkbox" onclick="onClickHandler()" onchange="onChangeHandler()" />

  const schedule = daysOfTheWeek.split("").map((day) => {
    return <>
      <label htmlFor={day}>{day}:</label>
      <input
        type="checkbox"
        name={day}
        checked={userDays.split("").includes(day)}
        onChange={props.handleCheckBoxChange}
      />
    </>
  })
  return (
    <>
      {schedule}
    </>
  )

  // create a div that holds checkboxes
  // it should have seven checkboxes, according to days of the week
  // each checkbox should be selected if the days are being passed down
  // once clicked the checkbox should either remove itself or add itself
}
export default CheckBox;
