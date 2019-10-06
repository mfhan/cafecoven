import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Intro =()=> {

  return(
    <div className = "intro">
      <h3>WHY WorkHaven?</h3><br>
      <h3>HOW IT WORKS</h3>
        <div className= "arguments">
        </div>
      <hr>
      <h3>Testimonials</h3>
        <div className= "blurbs">
        </div>
      <h3>Press Coverage</h3>
        <div className= "press">
        </div>
    </div>
  )

}

export default Intro
