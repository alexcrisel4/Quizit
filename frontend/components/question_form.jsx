import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.formDefault;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {

    return e => {
      e.preventDefault()
      this.setState({
        [field]: e.target.value
      })
    }
  }
  handleSubmit(e) {
    e.preventDefault;
    const question = Object.assign({}, this.state);
    this.props.createQuestion(question).then(question => {
      this.props.history.push(`/admin/question/${question.payload.question.id}`)
    })
  }

  render () {
    return (
      <div className="question-container">
          <input className="question-body" type="text" onChange={this.update("body")}/>
          <input type="submit" onSubmit={this.handleSubmit}/>
      </div>
    )
  }

}

export default QuestionForm 