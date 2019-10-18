import React from "react";
import { Link } from 'react-router-dom';

class QuizShow extends React.Component {
   constructor(props) {
     super(props)
   
   }


   componentDidMount() {
     this.props.fetchQuiz(this.props.match.params.quizId);
    
   }

   render() {
     let quiz = this.props.quiz
     if(quiz) {
      return( 
        <div className="show-container">
          <div className="quiz-info">
        <ul>
            <li className="show-item">
            <h2>{quiz.name}</h2>
          </li>
            <li className="show-item little">Subject: {quiz.subject} </li>
          <li className="show-item little" >Grade: {quiz.grade}</li>
        </ul>
          </div>
          <div className="show-links">
        <ul>
              <li className="show-edit"><i class="fa fa-pencil"></i><Link className="show-edit-link" to="/">Edit</Link></li>
        </ul>
          </div>
        </div>
      )
     } else {
       return(
         <div>Loading...</div>
       )
     }
   }
}

export default QuizShow;