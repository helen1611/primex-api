import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import countriesReducer from './countriesReducer';
import organisationsReducer from './organisationsReducer';

export default combineReducers({
  usersReducer,
  countriesReducer,
  organisationsReducer
});
