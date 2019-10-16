import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ loggedin, openModal }) => {

  if(loggedin) {
    return(
      <nav className="login-signup">
        <button className="menu" onClick={() => openModal('sidebar')}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <i class="fa fa-plus-circle"></i>
     <Link className="nav-create" to="/admin/quiz/new">Create a new quiz</Link>
      </nav>
    )
  } else {
    return (
      <nav className="login-signup">
        <ul className="nav-links">
          <li className="login" ><button onClick={() => openModal('login')} className="login-link">Log in</button></li>
          <li className="signup"><Link className="signup-link" to="/signup">Sign up</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
