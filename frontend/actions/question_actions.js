import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
})

export const receiveQuestion = payload => ({
  type: RECEIVE_QUESTION,
  payload
})

export const removeQuestion = payload => ({
  type: REMOVE_QUESTION,
  payload
})


export const fetchQuestions = (filter) => dispatch => (
  APIUtil.fetchQuestions(filter).then(questions => dispatch(receiveQuestions(questions)))
)

export const fetchQuestion = (id) => dispatch => (
  APIUtil.fetchQuestion(id).then(question => dispatch(receiveQuestion(question)))
)

export const createQuestion = (question) => dispatch => (
  APIUtil.createQuestion(question).then(question => dispatch(receiveQuesion(question)))
)

export const updateQuestion = (question) => dispatch => (
  APIUtil.updateQuestion(question).then(question => dispatch(receiveQuestion(question)))
)

export const deleteQuestion = (id) => dispatch => (
  APIUtil.deleteQuestion(id).then(question => dispatch(removeQuestion(question)))
)