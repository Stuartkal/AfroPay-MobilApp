import {
  REMOVE_PROFILE,
  REMOVE_WALLET,
  SET_PROFILE,
  SET_WALLET,
} from '../ActionCreators/actions';

export const profile = (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.data;

    case REMOVE_PROFILE:
      return {};

    default:
      return state;
  }
};

export const wallet = (state = { balance: 0 }, action) => {
  switch (action.type) {
    case SET_WALLET:
      return action.data;

    case REMOVE_WALLET:
      return {};

    default:
      return state;
  }
};
