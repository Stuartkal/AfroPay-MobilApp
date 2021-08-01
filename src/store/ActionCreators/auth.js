import * as actions from './actions';

export const loading = () => {
  return {
    type: actions.LOADING_ACTION,
  };
};

export const logout = () => {
  return {
    type: actions.LOG_OUT,
  };
};

export const loginSuccess = (name, email, phone, balance, role, token) => {
  return {
    type: actions.LOGIN_ACTION,
    name,
    email,
    phone,
    balance,
    role,
    token,
  };
};

export function setAuthToken(token) {
  return { type: actions.SET_TOKEN, data: token };
}

export const setProfile = (profile) => ({
  type: actions.SET_PROFILE,
  data: profile,
});
export const setWallet = (wallet) => ({
  type: actions.SET_WALLET,
  data: wallet,
});
