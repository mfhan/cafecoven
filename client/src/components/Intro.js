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
            <div className= "row" id = "you">
            <div className= "column">You do <strong>your best work</strong> in public places: cafeterias, independent coffee shops, hotel lobbies. But sometimes working alone gets tiresome</div>
            <div className= "column">You are a <strong>freelancer</strong> and would like to <strong>connect</strong> with other women in your industry -- all the while getting some work done</div>
            <div className= "column">You <strong>LIKE</strong> the idea of writing in a coffee shop -- but you need an <strong>accountability partner</strong> who will keep you productive</div>
            </div>
        <h3>HOW IT WORKS: SAFE, EASY, ACCURATE</h3>
          <div className= "row" id="desc">
          <div className= "column"><Icon  icon={clipboardPencil} />SIGN UP, FILL THE FORM & INDICATE YOUR AVAILABLE DAYS </div>
          <div className= "column"><Icon  icon={mapMarkedAlt} /> GET A MAP OF POTENTIAL MATCHES</div>
          <div className= "column"><Icon icon={okSign} />GET IN TOUCH WITH YOUR MATCH AND GET WORKING!</div>
          </div>

        <h3>TESTIMONIALS</h3>
          <div className= "row"  id="praise">
          <div className= "column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. -- Julie, Minneapolis </div>
          <div className= "column">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. -- Anne, New York</div>
          <div className= "column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua -- Beth, Fargo, ND</div>
          </div>
        <h3>Press Coverage</h3>
          <div className= "row" id ="clips">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. --Elle </p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.  --Vanity Fair </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. --New York Magazine </p>
          </div>
      </div>
  );
};

export default Intro
