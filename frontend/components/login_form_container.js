import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../actions/session_actions';
import React from 'react';
import { closeModal } from '../actions/modal_actions';
const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    formType: "login"
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(login(user)),
    
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)