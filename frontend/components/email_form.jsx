import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
  }


  update(field) {
    return e=> this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault; 

  }

  render() {
    return(
      <div>
        <form >
          <label>Email
          <input type="text" />
          </label>
          <Route to="/signup/occupation">Next</Route>
          {/* <button>Next</button> */}

        </form>
      </div>
    )
  }
}

export default EmailForm;