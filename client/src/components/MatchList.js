import React from 'react';
import SingleMatch from './SingleMatch';
import '../App.css';

const MatchList = (props) => {
  console.log(props)
  return (
    <>
    <h3>Your Matches:</h3>
      {props.users.map((user) => {
        console.log(props.users)
        return (
          <SingleMatch
            key={user.id}
            user={user}
          />
        )
      }) }
    </>
  )
};

export default MatchList;
