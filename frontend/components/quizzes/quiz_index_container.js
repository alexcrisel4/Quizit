import QuizIndex from './quiz_index';
import { connect } from 'react-redux';
import { fetchQuizzes } from '../../actions/quiz_actions';
import { selectFilteredQuizzes } from '../../reducers/selectors'
const mapStateToProps = (state, ownProps) => {
    let filter = ownProps.filter
    let quizzes
    if(filter) {
      quizzes = selectFilteredQuizzes(state, filter)
    } else {
      quizzes = Object.values(state.entities.quizzes);
    }
  return({  
    quizzes: quizzes,
    filter: filter
  })


}

const mapDispatchToProps = dispatch => {
  return({ 
    fetchQuizzes: (filter) => dispatch(fetchQuizzes(filter))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizIndex);