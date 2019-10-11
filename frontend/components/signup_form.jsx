import React from 'react';
import { merge } from 'lodash';

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
        <button>Sign up with Google</button>
        <div>-or-</div>
        <label HTMLfor="email">Sign up with email </label>
          <input id="email" type="text" onChange={this.update("email")}/>
        <input className="next" type="submit" value="next"/>
      </form>
    )

    const occupationForm = (
      <div className="occupation-container">
        <h2>I'm using Quizitz as...</h2>
        <form className ="occupation-form">
        <input className="occupation teacher" type="submit" value="a teacher" onClick={this.handleOccupation("teacher")}/>
        <input className="occupation student" type="submit" value="a student" onClick={this.handleOccupation("student")} />
        <input className="occupation parent" type="submit" value="a parent" onClick={this.handleOccupation("parent")} />
        </form>
      </div>
      )

    const userInfoForm = (
    
      <div>
        <h2>Let's complete your account</h2>
        <form className="user-signup" onSubmit={this.handleSubmit}>
          <label>Title
              <select defaultValue="--">
              <option disabled value="--">--</option>
              <option value="Ms.">Ms.</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Miss">Miss</option>
              <option value="Mx">Mx</option>
            </select>
          </label>
          <label for="first-name">First Name</label>
              <input id="first-name" type="text" onChange={this.update("first_name")} />
          <label for="last_name">Last Name</label>
              <input id="last_name" type="text" onChange={this.update("last_name")} />
          <label for="password">Password</label>
            <input id="password" type="password" onChange={this.update("password")} />
          <input className="user-submit" type="submit" value="Complete Sign Up" />
        </form>
      </div>
    )

    const studentForm = (
      <div>
        <h2>Let's complete your account</h2>
        <form className="student-signup" onSubmit={this.handleSubmit}>
          <label for="birthdate">Please confirm your date of birth</label>
            <input id="birthdate"type="date" onChange={this.update("birthdate")} />
          <label for="student-first-name">First Name</label>
              <input for="student-first-name" type="text" onChange={this.update("first_name")} />
          <label for="student-last-name">Last Name</label>
              <input id="student-last-name" type="text" onChange={this.update("last_name")} />
          <label for="student-password">Password</label>
            <input id="student-password" type="password" onChange={this.update("password")} />
          <input type="submit" value="Complete Sign Up" />
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
