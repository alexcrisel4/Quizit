import React from "react";
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupContainer from './signup_container';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import SidebarContainer from './sidebar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

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
  </div>
  )
};

export default App;