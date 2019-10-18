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
      <li><i class="fa fa-plus-square" aria-hidden="true"></i><Link className="create-quiz" onClick={close} to={"admin/quiz/new"}>Create a quiz</Link></li>
      <li><i class="fa fa-sign-out" aria-hidden="true"></i>
        <button className="logout-button" onClick={handleSubmit}>Log Out</button></li>
    </ul>
  </div>
)
};

export default Sidebar;