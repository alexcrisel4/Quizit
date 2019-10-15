import { connect } from 'react-redux';
import QuizForm from './quiz_form';
import { createQuiz } from '../../actions/quiz_actions';

const mapStateToProps = state => {
  return({
    formDefault: {
    name: "", 
    subject: "",
    grade: "",
    author_id: state.session.id,
    public: true
    }
  })
}

const mapDispatchToProps = dispatch => {
  return({
    createQuiz: (quiz) => dispatch(createQuiz(quiz))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm)