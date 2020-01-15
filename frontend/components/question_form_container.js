import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../actions/question_actions';

const mapStateToProps = state => {
  return ({
    formDefault: {
      body: "",
      quiz_id: state.session.quiz_id
    
    }
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createQuestion: (question) => dispatch(createQuestion(question))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm)