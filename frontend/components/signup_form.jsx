import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      title: ""
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
              <input type="text" onChange={this.update("first_name")}/>
          </label>
          <label>Last Name
              <input type="text" onChange={this.update("last_name")} />
          </label>
          <label>Password
            <input type="password" onChange={this.update("passowrd")}/>
          </label>
          <input type="submit" value="Complete Up"/>
          </form>
        </div>
    )
  }
}

export default SignupForm;
