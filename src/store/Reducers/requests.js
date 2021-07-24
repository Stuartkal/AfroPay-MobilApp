import * as actions from '../ActionCreators/actions';
import { updateObject } from './utility';

const initialState = {
  activities: [],
  deposit: {},
  send: {},
  withdraw: {},
  withdraw_confirm: {},
  withdrawn: false,
  deposited: false,
  sent: false,
  withdraw_confirmed: false,
  link: '',
  loading: false,
  error: false,
};

const requests = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_ACTION:
      return updateObject(state, {
        loading: true,
      });

    case actions.GET_ACTIVITIES_ACTION:
      return updateObject(state, {
        activities: action.data,
      });

    case actions.DEPOSIT_ACTION:
      return updateObject(state, {
        deposit: action.data,
        deposited: true,
        loading: false,
      });

    case actions.SEND_MONEY_ACTION:
      return updateObject(state, {
        send: action.data,
        sent: true,
        loading: false,
      });

    case actions.WITHDRAW_ACTION:
      return updateObject(state, {
        withdraw: action.data,
        withdrawn: true,
        loading: false,
      });

    case actions.WITHDRAW_APPROVAL_ACTION:
      return updateObject(state, {
        withdraw_confirm: action.data,
        withdraw_confirmed: true,
        loading: false,
      });

    case actions.ERROR_ACTION:
      return updateObject(state, {
        error: true,
      });

    case actions.SET_BARCODE:
      return updateObject(state, {
        link: action.link,
      });

    default:
      return state;
  }
};

export default requests;
