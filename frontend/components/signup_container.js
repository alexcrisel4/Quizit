import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../actions/session_actions';

const mapStateToProps = state => {
  return ({
    errors: state.errors.session
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)