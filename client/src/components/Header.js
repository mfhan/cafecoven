import React  from 'react';
import { Router,  Redirect, Link} from 'react-router-dom';
// import { withRouter } from 'react-router';
import { Icon, InlineIcon } from '@iconify/react';
import coffeeIcon from '@iconify/icons-whh/coffee';
import '../App.css';
import Intro from './Intro'

const Header =(props)=>{
  //
  // <Link to = '/'><h1>Welcome to WorkHaven!</h1> </Link>
  // { this.state.currentUser
  //   ?
  //   <>
  //   <p>Let's get to work, {this.state.currentUser.email}</p>
  //   <button onClick= {this.handleLogout}>Log Out</button>
  //   </>
  //   :
  //   <Link to = '/login'><button>Log In/Register</button></Link>
  // }
  //user.changedData: true

  return (
    <header>


      {props.currentUser
        ?
        <div>
          <Redirect to = {`/edit/${props.currentUser.id}`} />
          <h2>Hi {(props.currentUser && props.currentUser.username) ||(props.currentUser && props.currentUser.email) || `friend` } !</h2>
          <h1><Icon className = 'coffee' icon={coffeeIcon} /> &nbsp; Welcome to Cafe Coven! &nbsp; <Icon className = 'coffee' icon={coffeeIcon} /> </h1>
            &nbsp;
            <div className="button-container">
              <button  className="header-button"  onClick={props.handleLogout}>Log Out</button>
              <button className="header-button">
              <Link  to={`/edit/${props.currentUser.id}`}>Back to Your Profile</Link></button>
            </div>
        </div>
        :
        <>
        <Link to = "/">

        <h1> &nbsp; Welcome to Cafe Coven! </h1></Link>
        <div className="button-container">
          <button className ="header-button"  onClick={props.handleLoginButton}>Users: Register or Log In</button>
        </div>

          <Intro />
        </>
      }
    </header>
  );
}

export default Header;
// export default withRouter(Header);
//<Link to="/"><h1 >Welcome to WorkHaven</h1></Link>

          //
          // <header className="title">
          //   {<>
          //     if (props.currentUser && !props.changedData){
          //       <div>
          //         <Redirect to = {`/edit/${props.currentUser.id}`} />
          //         <h3>Hi {props.currentUser && props.currentUser.email}
          //         <button  className="content-button"  onClick={props.handleLogout}>Log Out</button>
          //         <Link className="content-button"   to={`/edit/${props.currentUser.id}`}> Change Profile</Link>
          //         </h3>
          //       </div>
          //     }
          //     else if (props.currentUser && props.changedData){
          //       <div>
          //         <Redirect to = {`/users`} />
          //         <h3>Hi {props.currentUser && props.currentUser.email}
          //         <button  className="content-button"  onClick={props.handleLogout}>Log Out</button>
          //         <Link className="content-button"   to={`/edit/${props.currentUser.id}`}> Change Profile</Link>
          //         </h3>
          //         <hr />
          //       </div>
          //     }
          //     else if (!props.currentUser){
          //       <>
          //       <button className ="login-button"  onClick={props.handleLoginButton}>Users: Register or Log In</button>
          //
          //       <Redirect to = "/"  />
          //
          //       <h1>Welcome to WorkHaven</h1>
          //       <h2>Connect and Cowork with Other Women</h2>
          //       <Intro />
          //       </>
          //     }
          //     </>
          //   }
          // </header>
