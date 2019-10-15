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
        <ul>
          <li>
            <h2>{quiz.name}</h2>
          </li>
          <li>Subject: {quiz.subject}</li>
          <li>Grade: {quiz.grade}</li>
        </ul>
      )
     } else {
       return(
         <div>Loading...</div>
       )
     }
   }
}

export default QuizShow;