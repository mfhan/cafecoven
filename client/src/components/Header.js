import React  from 'react';
import { Router,  Redirect, Link} from 'react-router-dom';
// import { withRouter } from 'react-router';
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
      <header >
        {props.currentUser
          ?
          <div>
            <Redirect to = {`/edit/${props.currentUser.id}`} />
            <h3>Hi {props.currentUser && props.currentUser.email}
            <button  className="content-button"  onClick={props.handleLogout}>Log Out</button>
            <Link className="content-button"   to={`/edit/${props.currentUser.id}`}> Change Profile</Link>
            </h3>
          </div>
          :
          <>
          <button className ="login-button"  onClick={props.handleLoginButton}>Users: Register or Log In</button>
          <Link to = "/">
            <h1>Welcome to WorkHaven</h1></Link>
            <h2>Connect and Cowork with Other Women</h2>
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
