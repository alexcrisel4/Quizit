import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from "../actions/quiz_actions";

const quizzesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState
  switch (action.type) {
    case RECEIVE_QUIZZES:
      newState = Object.assign({}, state, action.quizzes)
      return newState
    case RECEIVE_QUIZ:
      newState = Object.assign({}, state, { [action.payload.quiz.id]: action.payload.quiz })
      return newState
    case REMOVE_QUIZ:
      newState = Object.assign({}, state);
      delete newState[action.payload.quiz.id]
      return newState
    default:
      return state;
  }
}

export default quizzesReducer;