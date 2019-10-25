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
    let daysList = ''
    let availArray = [];

      if (daysAvailable.includes("m")){
        availArray.push("Monday")
      } else if (daysAvailable.includes("t")){
        availArray.push("Tuesday")
      }else if (daysAvailable.includes("w")){
        availArray.push("Wednesday")
      }else if (daysAvailable.includes("r")){
        availArray.push("Thursday")
      }else if (daysAvailable.includes("f")){
        availArray.push("Friday")
      }else if (daysAvailable.includes("s")){
        availArray.push("Saturday")
      }else if (daysAvailable.includes("u")){
        availArray.push("Sunday")
      }
      console.log(availArray)
      daysList = availArray.map((weekDay) =>{
        daysList += weekDay + " "
        return daysList
      })

    return (
      <div className="info-window">
          <name className="info-window">{displayName}</name>
          <p>Available on: {daysList}</p>
          <a href= "mailto:{displayEmail} ?subject=Mail from WorkHaven&body=Body-goes-here" target="_blank" rel="noopener noreferrer">Contact: {displayEmail}</a>
          <p >What she's working on: {displayIntro}</p>
      </div>
    );
  }
}
