import * as APIUtil from '../util/quiz_api_util';

export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";
export const RECEIVE_QUIZ = "RECEIVE_QUIZ";
export const REMOVE_QUIZ = "REMOVE_QUIZ";

export const receiveQuizzes = quizzes => ({
  type: RECEIVE_QUIZZES, 
  quizzes
})

export const receiveQuiz = quiz => ({
  type: RECEIVE_QUIZ, 
  quiz 
})

export const removeQuiz = quiz => ({
  type: REMOVE_QUIZ, 
  quiz
})


export const fetchQuizzes = () => dispatch => (
  APIUtil.fetchQuizzes().then(quizzes => dispatch(receiveQuizzes(quizzes)))
)

export const fetchQuiz = (id) => dispatch => (
  APIUtil.fetchQuiz(id).then(quiz => dispatch(receiveQuiz(quiz)))
)

export const createQuiz = (quiz) => dispatch => (
  APIUtil.createQuiz(quiz).then(quiz => dispatch(receiveQuiz(quiz)))
)

export const updateQuiz = (quiz) => dispatch => (
  APIUtil.updateQuiz(quiz).then(quiz => dispatch(receiveQuiz(quiz)))
)

export const deleteQuiz = (id) => dispatch => (
APIUtil.deleteQuiz(id).then(quiz => dispatch(removeQuiz(quiz))) 
)