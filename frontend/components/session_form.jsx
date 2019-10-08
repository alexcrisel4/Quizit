import React from 'react';

class SessionForm extends React.Component {
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
          <form onSubmit={this.handleSubmit}>
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
              <input type="text" onChange={this.update("firstName")}/>
          </label>
          <label>Last Name
              <input type="text" onChange={this.update("lastName")} />
          </label>
          <label>Password
            <input type="password" onChange={this.update("passowrd")}/>
          </label>
          </form>
        </div>
    )
  }
}

export default SessionForm;
