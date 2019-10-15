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
    let quizzes = this.props.quizzes.map(quiz => {
      return <QuizIndexItem quiz={quiz}/>
    })
      
    return(
      <ul>
        {quizzes}
      </ul>
    )
  }
}

export default QuizIndex;