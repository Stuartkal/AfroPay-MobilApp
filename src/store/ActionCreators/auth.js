import axios from 'axios';
import { baseURI, secret } from '../../config';
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

export const login = (email, password) => {
  return (dispatch, getState) => {
    const { token } = getState();
    dispatch(loading());

    return axios
      .post(
        `${baseURI}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      )
      .then((res) => {
        dispatch(setProfile(res.data.data));
        dispatch({
          type: actions.LOG_IN,
        });
        return Promise.resolve();
      })
      .catch((err) => {
        return Promise.reject(err.response.data.message);
      });
  };
};

export const registerAction = (message) => {
  return {
    type: actions.REGISTER_ACTION,
    message,
  };
};

function setAuthToken(token) {
  return { type: actions.SET_TOKEN, data: token };
}

const setProfile = (profile) => ({ type: actions.SET_PROFILE, data: profile });
const setWallet = (wallet) => ({ type: actions.SET_WALLET, data: wallet });

export const register =
  (firstName, lastName, email, phoneNumber, password) =>
  (dispatch, getState) => {
    const { token } = getState();

    dispatch(loading());

    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    return axios
      .post(`${baseURI}/user`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(setProfile(res.data.data.user));
        dispatch(setWallet(res.data.data.wallet));
        return Promise.resolve();
      })
      .catch((err) => {
        return Promise.reject(err.response.data.message);
      });
  };

export function getAuthToken() {
  return (dispatch) =>
    axios
      .post(
        `${baseURI}/auth/token`,
        { secret },
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then((response) => {
        dispatch(setAuthToken(response.data.token));
      });
}
