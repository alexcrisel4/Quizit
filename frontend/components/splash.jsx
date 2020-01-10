import React from "react";
// import '../../app/assets/stylesheets/splash.scss'
import { Link } from 'react-router-dom';

const Splash = props => {

  return ( 
    <div className="splash-container">
      <div className="left-splash">
      <h1 className="main-title">
        Motivate students with exciting quizzes!
      </h1>
      <h2>Review, assess, and engage!</h2>
      <Link className="signup-link" to="/signup">Get Started</Link>
      <div className="splash-login">
          <div>Already using Quizit?</div>
          <Link to="/login">Log in</Link>
      </div>
      </div>
      <div className="right-splash">
      <img src="" alt=""/>
      </div>
    </div>
   

  )
}

export default Splash; 