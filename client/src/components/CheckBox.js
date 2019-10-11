import React  from 'react';
import '../App.css';

const CheckBox = (props) => {
  const userDays = props.days;
  // const daysOfTheWeek = 'mtwrfsu';
  const daysOfTheWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
  console.log(userDays);
  //<input type="checkbox" onclick="onClickHandler()" onchange="onChangeHandler()" />
    const schedule = daysOfTheWeek.map((day) => {
      if (day === 'thur' ){
        return <>
            <label htmlFor={day}>{day}:</label>
            <input max-width= "10px"
              type="checkbox"
              name={day.charAt(3) }
              checked={userDays.includes(day.charAt(3)) || ""}
              onChange={props.handleCheckBoxChange}
            />
          </>
      } else if ( day === 'sun' ){
          return <>
              <label htmlFor={day}>{day}:</label>
              <input max-width= "10px"
                type="checkbox"
                name={day.charAt(1) }
                checked={userDays.includes(day.charAt(1)) || ""}
                onChange={props.handleCheckBoxChange}
              />
            </>
        } else {
        return <>
            <label htmlFor={day}>{day}:</label>
            <input max-width= "10px"
              type="checkbox"
              name={day.charAt(0) }
              checked={userDays.includes(day.charAt(0)) || ""}
              onChange={props.handleCheckBoxChange}
            />
          </>
      }
  })
  return (
    <div className = "check-box">
    <h3>When are you available this week?</h3>
      {schedule}
    </div>
  )

  // create a div that holds checkboxes
  // it should have seven checkboxes, according to days of the week
  // each checkbox should be selected if the days are being passed down
  // once clicked the checkbox should either remove itself or add itself
}
export default CheckBox;


//
//
//   const userDays = props.days;
//   const daysOfTheWeek = 'mtwrfsu';
//   //const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
//   console.log(userDays);
// //<input type="checkbox" onclick="onClickHandler()" onchange="onChangeHandler()" />
//
  // const schedule = daysOfTheWeek.split("").map((day) => {
  //   return <>
  //       <label htmlFor={day}>{day}:</label>
  //       <input max-width= "10px"
  //         type="checkbox"
  //         name={day}
  //         checked={userDays.includes(day) || ""}
  //         onChange={props.handleCheckBoxChange}
  //       />
  //     </>
  // })
//   return (
//     <div className = "check-box">
//     <h3>When are you available this week?</h3>
//       {schedule}
//     </div>
//   )
//
