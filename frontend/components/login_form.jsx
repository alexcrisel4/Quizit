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
        <form onSubmit={this.handleSubmit}>
          <label>Email/Username
              <input type="text" defaultValue="johndoe@company.com" onChange={this.update("email")} />
          </label>
          <label>Password
            <input type="password" onChange={this.update("passowrd")} />
          </label>
        </form>
      </div>
    )
  }
}

export default LoginForm;
