import React from 'react';



const Sidebar = ({currentUser, logout}) => {
return (
  <hgroup className="sidebar-group">
    {/* <h2 className="sidebar-name">, {currentUser.first_name + " " + currentUser.last_name}!</h2> */}
    <button className="logout-button" onClick={logout}>Log Out</button>
  </hgroup>
)
};

export default Sidebar;