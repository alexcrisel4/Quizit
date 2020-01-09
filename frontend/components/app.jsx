import React from "react";
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupContainer from './signup_container';
import NavbarContainer from './navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import QuizIndexContainer from './quizzes/quiz_index_container';
import QuizShowContainer from './quizzes/quiz_show_container';
import QuizFormContainer from './quizzes/quiz_form_container';
import Modal from './modal';
import Splash from './splash';
import { Switch } from 'react-router-dom';

const App = ({ loggedin }) => {
  return (<div className="app-container">
    <header>
      <NavbarContainer loggedin ={loggedin}/>

    </header>
   
    <Modal />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute exact path="/admin" component={QuizIndexContainer}/>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />

      <ProtectedRoute  path="/admin/quiz/new" component={QuizFormContainer}/>
      <ProtectedRoute path="/admin/quiz/:quizId" component={QuizShowContainer}/>
    </Switch>
  </div>
  )
};

export default App;