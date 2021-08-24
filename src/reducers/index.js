import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import countriesReducer from './countriesReducer';
import organisationsReducer from './organisationsReducer';
import selectUserByCountryReducer from './selectUserByCountryReducer';

export default combineReducers({
  usersReducer,
  countriesReducer,
  organisationsReducer,
  selectUserByCountryReducer
});
