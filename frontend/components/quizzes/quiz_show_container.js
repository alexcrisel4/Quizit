import { connect } from 'react-redux';
import QuizShow from './quiz_show';
import { fetchQuiz } from '../../actions/quiz_actions';



const mapStateToProps = (state, ownProps) => {
  return({
    quiz: state.entities.quizzes[ownProps.match.params.quizId]
  })
}


const mapDipatchToProps = dispatch => {
  return({
    fetchQuiz: (id) => {dispatch(fetchQuiz(id))}
  })
}

export default connect(mapStateToProps, mapDipatchToProps)(QuizShow)