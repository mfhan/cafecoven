import React, {PureComponent} from 'react';
import '../App.css';

export default class InfoContent extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = info.username;
    //const displayName = `${info.username}`;
    const displayWebsite = `${info.soc1}`
    const displayEmail = `${info.email}`
    const displayIntro = `${info.intro}`
    console.log('info from InfoContent', info)

    return (

      <div className="info-window">
        <div >
          {displayName}  &nbsp;  &nbsp;
          <a href= "mailto:{displayEmail} ?subject=Mail from WorkHaven&body=Body-goes-here" target="_blank" rel="noopener noreferrer">`${displayEmail}`</a>
           &nbsp;  &nbsp;
          <a
            target="_new"
            href={ `${displayWebsite}`}
          >
            {displayWebsite}
          </a> &nbsp;  &nbsp;
          <p>{displayIntro}</p>
        </div>
        <img width={150} src={info.image} alt ='' />
      </div>
    );
  }
}
