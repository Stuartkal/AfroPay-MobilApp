import { LOG_IN, LOG_OUT } from '../ActionCreators/actions';

export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case LOG_IN:
      return true;

    case LOG_OUT:
      return false;

    default:
      return state;
  }
};
