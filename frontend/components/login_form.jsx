import React from 'react';

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
      <div>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <h2>Log in</h2>
          <label>Email/Username
              <input type="text" defaultValue="johndoe@company.com" onChange={this.update("email")} />
          </label>
          <label>Password
            
            <input type="password" onChange={this.update("password")} />
          </label>
          
          <input className="submit"type="submit" value="LOG IN"/>
        </form>
      </div>
    )
  }
}

export default LoginForm;
