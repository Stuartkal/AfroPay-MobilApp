import * as actionTypes from '../ActionCreators/actions';
import { updateObject } from './utility';

const initialState = {
  deposits: [],
  withdrawals: [],
  transfers: [],
};

const receipts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT_RECEIPTS_ACTION:
      return updateObject(state, {
        deposits: action.data,
      });

    case actionTypes.WITHDRAW_RECEIPTS_ACTION:
      return updateObject(state, {
        withdrawals: action.data,
      });

    case actionTypes.TRANSFER_RECEIPTS_ACTION:
      return updateObject(state, {
        transfers: action.data,
      });

    default:
      return state;
  }
};

export default receipts;
