import React from "react";


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
        <ul>
            <li className="show-item">
            <h2>{quiz.name}</h2>
          </li>
            <li className="show-item little">Subject: {quiz.subject} </li>
          <li className="show-item little" >Grade: {quiz.grade}</li>
        </ul>
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