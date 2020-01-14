import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from "../actions/quiz_actions";

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      newState = Object.assign({}, state, action.questions)
      return newState
    case RECEIVE_QUESTION:
      newState = Object.assign({}, state, { [action.payload.question.id]: action.payload.question })
      return newState
    case REMOVE_QUIZ:
      newState = Object.assign({}, state);
      delete newState[action.payload.question.id]
      return newState
    default:
      return state;
  }
}

export default questionsReducer;