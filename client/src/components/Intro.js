import React from 'react';
import '../App.css';
import { Icon, InlineIcon } from '@iconify/react';
import coffeeIcon from '@iconify/icons-whh/coffee';
import counterclockwiseArrowsButton from '@iconify/icons-emojione-monotone/counterclockwise-arrows-button'
import mapIcon from '@iconify/icons-flat-ui/map';
import mapMarkedAlt from '@iconify/icons-fa-solid/map-marked-alt';
import okSign from '@iconify/icons-el/ok-sign';
import notebookIcon from '@iconify/icons-vaadin/notebook';
import clipboardPencil from '@iconify/icons-foundation/clipboard-pencil';


const Intro=()=>{

  return(
      <div className = "intro">
        <h2><Icon className = 'coffee' icon={coffeeIcon} />  WHY WorkHaven?  <Icon icon={coffeeIcon} /></h2>
          <h3>IS THIS YOU?</h3>
            <div className= "row">
            <div className= "column">You do your best work in public places: cafeterias, independent coffee shops, hotel lobbies. But sometimes working alone gets tiresome</div>
            <div className= "column">You are a freelancer and would like to connect with other women in your industry -- all the while getting some work done.</div>
            <div className= "column">You LIKE the idea of writing in a coffee shop -- but you need an accountability partner who will keep you productive</div>
            </div>
        <h3>HOW IT WORKS: SAFE, EASY, ACCURATE</h3>
          <div className= "row">
          <div className= "column"><Icon className ='how' icon={clipboardPencil} />SIGN UP, FILL THE FORM & INDICATE YOUR AVAILABLE TIMES </div>
          <div className= "column"><Icon className ='how' icon={mapMarkedAlt} /> GET A MAP OF POTENTIAL MATCHES</div>
          <div className= "column"><Icon className ='how' icon={okSign} />GET IN TOUCH WITH YOUR MATCH AND GET WORKING!</div>
          </div>

        <h3>TESTIMONIALS</h3>
          <div className= "row">
          <div className= "column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. -- Julie, Minneapolis </div>
          <div className= "column">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. -- Anne, New York</div>
          <div className= "column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua -- Beth, Fargo, ND</div>
          </div>
        <h3>Press Coverage</h3>
          <div className= "clips">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
      </div>
  );
};

export default Intro
