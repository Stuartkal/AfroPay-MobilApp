import { combineReducers } from 'redux';
import authReducer from './auth';
import receiptsReducer from './receipts';
import requestReducer from './requests';

export default combineReducers({
  auth: authReducer,
  activities: requestReducer,
  receipts: receiptsReducer,
});
