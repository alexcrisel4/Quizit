import React from 'react';
import QuizIndexItem from './quiz_index_item'
class QuizIndex extends React.Component {
  constructor(props) {
    super(props)


  }

  componentDidMount () {
    this.props.fetchQuizzes(this.props.filter);
    }


  render () {
    let quizzes = this.props.quizzes.map((quiz, i) => {
      return <li><QuizIndexItem key={i} quiz={quiz} /></li>
    })
      
    return(
      
      <div className="index-container">
        <h2>What will you teach today?</h2>
        <ul>
          {quizzes}
        </ul>
      </div>
    )
  }
}

export default QuizIndex;