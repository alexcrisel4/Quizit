import React from "react";
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupContainer from './signup_container';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import SidebarContainer from './sidebar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import QuizIndexContainer from './quizzes/quiz_index_container';
import QuizShowContainer from './quizzes/quiz_show_container';
import QuizFormContainer from './quizzes/quiz_form_container';
import { Switch } from 'react-router-dom';

const App = ({ loggedin }) => {
  let sidebar;
  if(loggedin) {
    sidebar = < SidebarContainer />
    
  } 

  return (<div className="app-container">
    <header>
      <Navbar loggedin ={loggedin}/>

    </header>
    {sidebar}
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute exact path="/admin" component={QuizIndexContainer}/>
    <Switch>
      <ProtectedRoute  path="/admin/quiz/new" component={QuizFormContainer}/>
      <ProtectedRoute path="/admin/quiz/:quizId" component={QuizShowContainer}/>
    </Switch>
  </div>
  )
};

export default App;