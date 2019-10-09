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
        <label>Email
          <input type="text" onChange={this.update("email")}/>
        </label>
        <input type="submit" value="next"/>
      </form>
    )
    const occupationForm = (
      
        <form>
          <input type="submit" value="Teacher" onClick={this.handleOccupation("teacher")}/>
          <input type="submit" value="Student" onClick={this.handleOccupation("student")} />
          <input type="submit" value="Parent" onClick={this.handleOccupation("parent")} />
        </form>
      )

    const userInfoForm = (
    
      <div>
        <h2>Let's complete your account</h2>
        <form className="signup" onSubmit={this.handleSubmit}>
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
          <label>First Name
              <input type="text" onChange={this.update("first_name")} />
          </label>
          <label>Last Name
              <input type="text" onChange={this.update("last_name")} />
          </label>
          <label>Password
            <input type="password" onChange={this.update("password")} />
          </label>
          <input type="submit" value="Complete Sign Up" />
        </form>
      </div>
    )

    const studentForm = (
      <div>
        <h2>Let's complete your account</h2>
        <form className="signup" onSubmit={this.handleSubmit}>
          <label>Please confirm your date of birth
            <input type="date" onChange={this.update("birthdate")} />
          </label>
          <label>First Name
              <input type="text" onChange={this.update("first_name")} />
          </label>
          <label>Last Name
              <input type="text" onChange={this.update("last_name")} />
          </label>
          <label>Password
            <input type="password" onChange={this.update("password")} />
          </label>
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
      <div>
        {activeForm}
      </div>
    )
  }
}


export default SignupForm;
