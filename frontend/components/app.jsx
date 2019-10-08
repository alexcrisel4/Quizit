import React from "react";
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import EmailForm from './email_form';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const App = () => (
  <div>
    <header>
      <Navbar/>
    </header>
    <h1>Quizit</h1>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={EmailForm} />
  </div>
);

export default App;