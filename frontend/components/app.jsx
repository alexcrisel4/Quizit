import React from "react";
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupContainer from './signup_container';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const App = () => (
  <div>
    <header>
      <Navbar/>
    </header>
    <h1>Quizit</h1>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;