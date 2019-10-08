import React from 'react';
import '../App.css';

const Intro=()=>{

  return(
      <div className = "intro">
        <h3>WHY WorkHaven?</h3><br />
          <h3>SAFE, EASY, ACCURATE</h3>
            <div className= "arguments">
            <p>Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. </p>
            </div>
          
          <h3>Testimonials</h3>
            <div className= "blurbs">
            <p>We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.</p>
            </div>
          <h3>Press Coverage</h3>
          <div className= "clips">
            <p>But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract.</p>
          </div>
      </div>
  );
};

export default Intro
