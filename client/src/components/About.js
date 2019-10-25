import React from 'react';

function About(props) {
  console.log('this is About: props', props)
  return (
    <div>
      <h2>About This Project: </h2>

      <p>This project stems from a real-life problem I've been having connecting with other women freelancers in the city: there was no convenient way to check whether anyone else was working nearby in a one-stop visual check. Connecting by email is inconvenient; SMS message groups become unwieldy since you hit absolutely every member every time; but working with a smaller affinity group defeated the network's very idea of growth and inclusivity. </p>
      <p></p>
      <p>Technologies used: React, React-Router, Rails 6, Postgres, Axios, Json web Token, bcrypt, Mapbox, react-map-gl, CSS flexbox </p>
      <p>Medium Blog Link: </p>
      <a href="https://github.com/mfhan/paylay" target="_blank" >GitHub README </a>
    </div>
  );
}

export default About;
