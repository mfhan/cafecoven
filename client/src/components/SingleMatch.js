import React from 'react';
import '../App.css';

const SingleMatch = (props) => {
  console.log(props)
  return (
    <div className = "home-profile">
      <h3>{props.user.username}</h3>
      <p>{props.user.intro} &nbsp; <strong>&nbsp;  <span>  <a href={`${props.user.email}`} target="_blank" rel="noopener noreferrer">Contact</a> </span></strong></p>
    </div>
  )
};

export default SingleMatch;
