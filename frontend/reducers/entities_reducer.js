import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import quizzesReducer from './quizzes_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  quizzes: quizzesReducer
});

export default entitiesReducer;