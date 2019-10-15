import React from 'react';
import { merge } from 'lodash';
import {Link} from 'react-router-dom';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {email: "",
            password: "",
            first_name: "",
            last_name: "",
            title: "",
            user_type: "",
            birthdate: "",
            },
  activeForm: "emailForm"
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOccupation = this.handleOccupation.bind(this)
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
  
    if(this.state.activeForm === "emailForm") {
      this.setState({ activeForm: "occupationForm"})
    } else {
      const user = Object.assign({}, this.state.user);
      this.props.processForm(user);
    }
  }

  update(field) {
   
    // debugger;
    return e => this.setState(
      merge({}, this.state, {user: {[field]: e.target.value}})
    )
  }

  handleOccupation(occupation) {
    let nextForm 
    if(occupation === "student") {
      nextForm = "studentForm"
    } else {
      nextForm = "userInfoForm"
    }
    return e => {
      e.preventDefault();
      this.setState(
      merge({}, this.state, { user: {user_type: occupation}}, { activeForm: nextForm })
    )
   }
  }

  render() {
    const emailForm = (
      <form className="email-form" onSubmit={this.handleSubmit}>
        <h2>Welcome to Quizitz</h2>
        <label HTMLfor="email">Sign up with email </label>
          <input id="email" type="text" placeholder="mmcgonagal@hogwarts.com"onChange={this.update("email")}/>
        <input className="next" type="submit" value="next"/>
      </form>
    )

    const occupationForm = (
      <div className="occupation-container">
        
        <form className ="occupation-form">
        <div className="occupation-title-container">
          <div className="occupation-title">I'm using Quizitz as...</div>
          <div className="occupation-outer-container">
            <div className="occupation-input-container">
              <input id="teacher" className="occupation teacher" value=""type="submit" onClick={this.handleOccupation("teacher")}/>
              <label htmlFor="teacher">a teacher</label>
            </div>
              <div className="occupation-input-container">
              <input className="occupation student" type="submit"  value="" onClick={this.handleOccupation("student")} />
                <label htmlFor="student">a student</label>
            </div>
              <div className="occupation-input-container">
              <input id="parent" className="occupation parent" value="" type="submit" onClick={this.handleOccupation("parent")} />
                <label htmlFor="parent">a parent</label>
                <p>or guardian</p>
              </div>
            </div>
        </div>
          <input className="occupation-submit" type="submit" value="I'm not connected to a school" onClick={this.handleOccupation("parent")}/>
        </form>
          
      </div>
      )

    const userInfoForm = (
    
      <div className ="user-form-container">
        <h2>Let's complete your account</h2>
        <form className="user-signup" onSubmit={this.handleSubmit}>
          <label className="user-label">Title</label>
              <select className="user-input select" defaultValue="--">
              <option disabled value="--">--</option>
              <option value="Ms.">Ms.</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Miss">Miss</option>
              <option value="Mx">Mx</option>
            </select>
          <label className="user-label" for="first-name">First name</label>
          <input placeHolder="Anne" className="user-input" id="first-name" type="text" value={this.state.user.first_name} onChange={this.update("first_name")} />
          <label className="user-label" for="last_name">Last ame</label>
          <input placeHolder="Perkins" className="user-input" id="last_name" type="text" value={this.state.user.last_name} onChange={this.update("last_name")} />
          <label className="user-label" for="password">Password</label>
          <input placeHolder="******" className="user-input" id="password" type="password" onChange={this.update("password")} />
          <input className="user-submit" type="submit" value="Complete Sign Up" />
        </form>
      </div>
    )

   

    const studentForm = (
      <div className="student-form-container">
        <h2>Let's complete your account</h2>
        <form className="student-signup" onSubmit={this.handleSubmit}>
          <label className="student-form-label" for="birthdate">Please confirm your date of birth</label>
            <input className="student-form-input" id="birthdate"type="date" onChange={this.update("birthdate")} />
          <label className="student-form-label" for="student-email">Parent or guardian's email</label>
          <input placeHolder="name@email.com" className="student-form-input" id="student-email" type="text" onChange={this.update("first_name")} />
          <label className="student-form-label"for="student-first-name">First Name</label>
          <input placeHolder="Mark"className="student-form-input"id="student-first-name" type="text" onChange={this.update("first_name")} />
          <label className="student-form-label"for="student-last-name">Last Name</label>
          <input placeHolder="Brendanawicz"className="student-form-input"id="student-last-name" type="text" onChange={this.update("last_name")} />
          <label className="student-form-label"for="student-password">Password</label>
          <input placeHolder="******" className="student-form-input"id="student-password" type="password" onChange={this.update("password")} />
          <input className="student-submit" type="submit" value="Complete Sign Up" />
        </form>
      </div>
    )
    let activeForm
    switch (this.state.activeForm) {
      case "emailForm":
        activeForm = emailForm; 
        break
      case "occupationForm":
        activeForm = occupationForm; 
        break
      case "userInfoForm":
        activeForm = userInfoForm;
        break
      case "studentForm": 
        activeForm = studentForm;
        break
    }
    return (
      <div className="forms">
        {activeForm}
      </div>
    )
  }
}


export default SignupForm;
