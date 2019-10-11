import React from 'react';
import { Link } from 'react-router-dom'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h3>Log in</h3>
          <label for="login-email">Email/Username</label>
              <input id="login-email" className="login-input" type="text" placeholder="johndoe@company.com" onChange={this.update("email")} />
          <label for="login-password" >Password</label>
          <input id="login-password" className="login-input" type="password" onChange={this.update("password")} />
          <input className="login-submit" type="submit" value="LOG IN"/>
          <p>Don't have an account? <Link to="/signup">Click Here</Link> to sign up</p>
        </form>
      </div>
    )
  }
}

export default LoginForm;
