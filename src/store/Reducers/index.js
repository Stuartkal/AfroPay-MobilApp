import { combineReducers } from 'redux';
import { loggedIn } from './auth';
import { profile, wallet } from './profile';
import { token } from './token';

export default combineReducers({
  loggedIn,
  token,
  profile,
  wallet,
});
