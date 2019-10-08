import React from 'react';
import SingleMatch from './SingleMatch';
import InfoContent from './InfoContent';

import '../App.css';

const MatchList = (props) => {
  console.log(props)
  return (
    <>
    <h3>Your Matches:</h3>
      {props.users.map((user) => {
        console.log(props.users)
        return (
          <InfoContent
            key={user.id}
            user={user}
          />
        )
      }) }
    </>
  )
};

export default MatchList;
