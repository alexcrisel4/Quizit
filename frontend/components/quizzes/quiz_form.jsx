import React from 'react';
import { Link } from 'react-router-dom';



class QuizForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.formDefault;

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    
    return e => { e.preventDefault()
      this.setState({
      [field]: e.target.value
    })}
  }

  handleSubmit(e) {
    e.preventDefault;
    const quiz = Object.assign({}, this.state);
    this.props.createQuiz(quiz).then(quiz => {
      this.props.history.push(`/admin/quiz/${quiz.payload.quiz.id}`)
    })
  }

  render() {
    return(
      <div className ="quiz-form-container">
        <form className="quiz-form" onSubmit={this.handleSubmit}>
          <div className="form-head">
          <img src="https://cf.quizizz.com/img/editor/createaquiz.png"></img>
          <h2>Create a quiz</h2>
          </div>
          <label htmlFor="new-quiz-name">1. Name this quiz</label>
          <input placeholder="Quiz Name" id="new-quiz-name" type="text" onChange={this.update("name")} />
          <label>2. Choose relavent subjects</label>
          <div className="subject-container">
          <button onClick={this.update("subject")} value="Matematics" className="subject">Mathmatics</button>
          <button onClick={this.update("subject")} value="English" className="subject">English</button>
          <button onClick={this.update("subject")} value="Physics" className="subject">Physics</button>
          <button onClick={this.update("subject")} value="Chemistry" className="subject">Chemistry</button>
          <button onClick={this.update("subject")} value="Science" className="subject">Science</button>
          <button onClick={this.update("subject")} value="Computers" className="subject">Computers</button>
          <button onClick={this.update("subject")} value="Geography" className="subject">Geography</button>
          <button onClick={this.update("subject")} value="World Languages" className="subject">World Languages</button>
          <button onClick={this.update("subject")} value="History" className="subject">History</button>
          <button onClick={this.update("subject")} value="Social Studies" className="subject">Social Studies</button>
          <button onClick={this.update("subject")} value="Physical Ed" className="subject">Physical Ed</button>
          <button onClick={this.update("subject")} value="Arts" className="subject">Arts</button>
          <button onClick={this.update("subject")} value="Fun" className="subject">Fun</button>
          <button onClick={this.update("subject")} value="Professional Development" className="subject">Professional Development</button>
          <button onClick={this.update("subject")} value="Arcitecture" className="subject">Arcitecture</button>
          <button onClick={this.update("subject")} value="Business Design" className="subject">Business Design</button>
          <button onClick={this.update("subject")} value="Design" className="subject">Design</button>
          <button onClick={this.update("subject")} value="Education" className="subject">Education</button>
          <button onClick={this.update("subject")} value="Industrial Technology" className="subject">Industrial Technology</button>
          <button onClick={this.update("subject")} value="Journalism" className="subject">Journalism</button>
          <button onClick={this.update("subject")} value="Life Skills" className="subject">Life Skills</button>
          <button onClick={this.update("subject")} value="Moral Science" className="subject">Moral Science</button>          
          <button onClick={this.update("subject")} value="Performing Arts" className="subject">Performing Arts</button>
          <button onClick={this.update("subject")} value="Philosophy" className="subject">Philosophy</button>
          <button onClick={this.update("subject")} value="Religious Studies" className="subject">Religious Studies</button>
          <button onClick={this.update("subject")} value="Special Education" className="subject">Special Education</button>
          <button onClick={this.update("subject")} value="Specialty" className="subject">Specialty</button>
          <button onClick={this.update("subject")} value="Other" className="subject">Other</button>
          </div>
          <div className="new-quiz-buttons">
            <Link to="/admin" className="new-quiz-cancel">Cancel</Link>
          <input className="new-quiz-submit" type="submit" value="Next"/>
          </div>
        </form>
      </div>
    )
  }
}

export default QuizForm;