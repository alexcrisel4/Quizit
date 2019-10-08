import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
  
    return (
      <nav className="login-signup">
        <Link className="login" to="/login">Log in</Link>
      <Link className="signup" to="/signup">Sign up!</Link>
      </nav>
    )
}

export default Navbar;
