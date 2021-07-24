import axios from 'axios';
import qs from 'qs';
import * as actions from './actions';

export const loading = () => {
  return {
    type: actions.LOADING_ACTION,
  };
};

export const logout = () => {
  return {
    type: actions.REMOVE_USER,
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

export const login = (email, password, callback) => {
  return (dispatch) => {
    dispatch(loading());

    let requestOptions = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };

    const data = qs.stringify({
      email,
      password,
    });

    axios
      .post('http://165.22.196.206/api/auth/login', data, requestOptions)
      .then((res) => {
        console.log(res.data);
        dispatch(
          loginSuccess(
            res.data.name,
            res.data.email,
            res.data.phone,
            res.data.balance,
            res.data.role,
            res.data.access_token,
          ),
        );
        callback({ success: true, res });
      })
      .catch((err) => {
        callback({ success: false, res: err });
        // console.log(err.message)
      });
  };
};

export const registerAction = (message) => {
  return {
    type: actions.REGISTER_ACTION,
    message,
  };
};

export const register = (
  name,
  email,
  phone,
  role,
  password,
  password_confirmation,
  callback,
) => {
  return (dispatch) => {
    dispatch(loading());

    let requestOptions = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };

    const data = qs.stringify({
      name,
      email,
      phone,
      role,
      password,
      password_confirmation,
    });

    axios
      .post('http://165.22.196.206/api/auth/register', data, requestOptions)
      .then((res) => {
        // console.log(res.data)
        dispatch(registerAction(res.data.message));
        callback({ success: true, res });
      })
      .catch((err) => {
        callback({ success: false, res: err });
        // console.log(err.message)
      });
  };
};
