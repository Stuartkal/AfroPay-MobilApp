import { combineReducers } from 'redux'
import authReducer from './auth'
import requestReducer from './requests'
import receiptsReducer from './receipts'

export default combineReducers({
    auth: authReducer,
    activities: requestReducer,
    receipts: receiptsReducer
})