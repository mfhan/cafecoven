import React, {Component}  from 'react';

import '../App.css';

  // create a div that holds checkboxes
  // it should have seven checkboxes for the days of the week
  // it passes users and their 'days' property
  // once clicked the checkbox should display every user whose 'days' property INCLUDES the corresponding letter

//write a function handleFilterChange
//use first part of handleCheckBoxChange to extract day of the week
//use getUsers to have a list of all Users
//
//then loop through the list:
//for (let i =0; i< users.length; i++){
//   let usersOfDay = []
//   let thisUser = (users[i])
//   if thisUser.days.includes('day'){
//     usersOfDay.push(thisUser)
//   }
//  return usersOfDay
// }


handleFilterChange =(e)=>{
  let myDay = '';
  const day = e.target.name;

  const findSame = (ourDay, userDays) => {
    console.log(userDays)
    return userDays.split('').includes(ourDay);
  }

  const findMatch = (day, users) => {
    return users.filter((user) => findSame(day, user.days));
  }
  console.log(findMatch(myDay, people));
}


const Filter = (props) => {

  const daysOfTheWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
  //<input type="checkbox" onclick="onClickHandler()" onchange="onChangeHandler()" />
    const filterBox = daysOfTheWeek.map((day) => {
      if (day === 'thur' ){
        return <>
            <label htmlFor={day}>{day}:</label>
            <input max-width= "10px"
              type="checkbox"
              name={day.charAt(3) }
              checked={userDays.includes(day.charAt(3)) || ""}
              onChange={props.handleFilterChange}
            />
          </>
      } else if ( day === 'sun' ){
          return <>
              <label htmlFor={day}>{day}:</label>
              <input max-width= "10px"
                type="checkbox"
                name={day.charAt(1) }
                checked={userDays.includes(day.charAt(1)) || ""}
                onChange={props.handleFilterChange}
              />
            </>
        } else {
        return <>
            <label htmlFor={day}>{day}:</label>
            <input max-width= "10px"
              type="checkbox"
              name={day.charAt(0) }
              checked={userDays.includes(day.charAt(0)) || ""}
              onChange={props.handleFilterChange}
            />
          </>
      }
  })
  return (
    <div className = "check-box">
    <h3>Click on a day to see who is available</h3>
      {filterBox}
    </div>
  )

}
export default Filter;
