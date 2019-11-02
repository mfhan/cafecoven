import React, {PureComponent} from 'react';
import '../App.css';

export default class InfoContent extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = info.username;
    const displayWebsite = `${info.soc1}`
    const displayEmail = `${info.email}`
    const displayIntro = `${info.intro}`
    const daysAvailable = info.days.split("")
    console.log(daysAvailable);
    let daysList = ''

      if (daysAvailable.includes("m")){
        daysList += "Monday "
      }  if (daysAvailable.includes("t")){
        daysList += "Tuesday "
         console.log(daysList)
      }if (daysAvailable.includes("w")){
        daysList += "Wednesday "
         console.log(daysList)
      } if (daysAvailable.includes("r")){
        daysList += "Thursday "
         console.log(daysList)
      } if (daysAvailable.includes("f")){
        daysList += "Friday "
         console.log(daysList)
      }  if (daysAvailable.includes("s")){
        daysList += "Saturday "
         console.log(daysList)
      }  if (daysAvailable.includes("u")){
        daysList += "Sunday"
      }

    return (

      <div className="info-window">
          <name className="info-window">{displayName}</name>
          <p >What she's working on: {info.intro}</p>
          <p>Available on: {daysList}</p>
          <a href= "mailto:{displayEmail} ?subject=Mail from WorkHaven&body=Body-goes-here" target="_blank" rel="noopener noreferrer">Contact: {displayEmail}</a>
      </div>

    );
  }
}

//
// let daysList = ''
// let availArray = []
// for (let i =0; i <daysAvailable.length; i++ ){
//   if (daysAvailable.includes("m")){
//     availArray.push("Monday")
//   }  if (daysAvailable.includes("t")){
//     availArray.push("Tuesday")
//   }if (daysAvailable.includes("w")){
//     availArray.push("Wednesday")
//   } if (daysAvailable.includes("r")){
//     availArray.push("Thursday")
//   } if (daysAvailable.includes("f")){
//     availArray.push("Friday")
//   }  if (daysAvailable.includes("s")){
//     availArray.push("Saturday")
//   }  if (daysAvailable.includes("u")){
//     availArray.push("Sunday")
//   }
//   console.log(availArray)
//   return availArray
// }
// daysList = availArray.map((weekDay) =>{
//   daysList += " "+ weekDay + " "
//   return "Available on: " + daysList
// })

    //
    // for (let i =0; i <daysAvailable.length; i++ ){
    //   if (daysAvailable.includes("m")){
    //     daysList += "Monday "
    //   }  if (daysAvailable.includes("t")){
    //     daysList += "Tuesday "
    //   }if (daysAvailable.includes("w")){
    //     daysList += "Wednesday "
    //   } if (daysAvailable.includes("r")){
    //     daysList += "Thursday "
    //   } if (daysAvailable.includes("f")){
    //     daysList += "Friday "
    //   }  if (daysAvailable.includes("s")){
    //     daysList += "Saturday "
    //   }  if (daysAvailable.includes("u")){
    //     daysList += "Sunday"
    //   }
    //   console.log(daysList)
    //   return daysList
    // }
