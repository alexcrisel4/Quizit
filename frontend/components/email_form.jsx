import React from 'react'

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
        <form>
          <input type="text" />
        </form>
      </div>
    )
  }
}