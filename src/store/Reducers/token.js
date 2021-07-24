import { SET_TOKEN, REMOVE_TOKEN } from '../ActionCreators/actions';

export const token = (state = '', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.data;

    case REMOVE_TOKEN:
      return '';

    default:
      return state;
  }
};
