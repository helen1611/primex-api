import { ADD_USERS, FETCH_USERS } from '../actions/action-types';

const initialState = { users:[] }

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USERS:
      return { 
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
