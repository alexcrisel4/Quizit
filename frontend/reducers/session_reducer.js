import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = {id: null}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOGOUT_CURRENT_USER: 
      return {id: null}
    case RECEIVE_CURRENT_USER: 
      return {id: action.currentUser.id}
    default: 
      return state;
  }
}

export default sessionReducer; 

