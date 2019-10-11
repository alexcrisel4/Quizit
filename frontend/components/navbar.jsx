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
        <ul className="nav-links">
          <li className="login" ><Link className="login-link" to="/login">Log in</Link></li>
          <li className="signup"><Link className="signup-link" to="/signup">Sign up</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
