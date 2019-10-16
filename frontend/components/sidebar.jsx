import React from 'react';
import { Link } from 'react-router-dom';



const Sidebar = ({currentUser, logout, closeModal}) => {

const handleSubmit = () => {
    closeModal();
    logout();
  }

const close = () => {
  closeModal();
}

return (
  <div id="sidebar">
    <ul>
      <li className="sidebar-name">{currentUser.first_name + " " + currentUser.last_name}</li>
      <li><button className="logout-button" onClick={handleSubmit}>Log Out</button></li>
      <li><Link className="create-quiz" onClick={close} to={"admin/quiz/new"}>Create a quiz</Link></li>
    </ul>
  </div>
)
};

export default Sidebar;