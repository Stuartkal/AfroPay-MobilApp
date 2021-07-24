import { combineReducers } from 'redux';
import { loggedIn } from './auth';
import { profile, wallet } from './profile';
import receiptsReducer from './receipts';
import requestReducer from './requests';
import { token } from './token';

export default combineReducers({
  loggedIn,
  activities: requestReducer,
  receipts: receiptsReducer,
  token,
  profile,
  wallet,
});
