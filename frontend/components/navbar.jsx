import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ loggedin }) => {
  if(loggedin) {
    return(
     <div>I'm logged in</div>
    )
  } else {
    return (
      <nav className="login-signup">
        <Link className="login" to="/login">Log in</Link>
        <Link className="signup" to="/signup">Sign up!</Link>
      </nav>
    )
  }
}

export default Navbar;
