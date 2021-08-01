import axios from 'axios';
import { baseURI, secret } from '../config';
import {
  loading,
  LOG_IN,
  setAuthToken,
  setProfile,
  SET_WALLET,
} from '../store/ActionCreators';

export const setWallet = (data) => ({
  type: SET_WALLET,
  data,
});

export const deposit = (amount, method, phoneNumber) => {
  return (_dispatch, getState) => {
    const { token, profile } = getState();

    return axios
      .post(
        `${baseURI}/wallet/top-up`,
        {
          amount,
          paidBy: profile.id,
          method,
          phoneNumber,
        },
        {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        },
      )
      .then((res) => Promise.resolve(res.data.data.redirect))
      .catch((err) => Promise.reject(err.response.data.message));
  };
};

export const withdraw = (amount, phoneNumber) => {
  return (_dispatch, getState) => {
    const { token, profile } = getState();

    // TODO: COMPLETE WITHDRAW
    return axios
      .post(
        `${baseURI}/wallet/withdraw`,
        {
          amount,
          userId: profile.id,
          phoneNumber,
        },
        {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        },
      )
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err.response.data.message));
  };
};

export const transfer = (amount, receiverId) => {
  return (_dispatch, getState) => {
    const { token, profile } = getState();
    if (receiverId === profile.id) {
      return Promise.reject('You cannot transfer money to yourself');
    }

    return axios
      .post(
        `${baseURI}/wallet/transfer`,
        {
          amount,
          senderId: profile.id,
          receiverId,
        },
        {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        },
      )
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err.response.data.message));
  };
};

export const getWallet = () => {
  return (dispatch, getState) => {
    const { token, profile } = getState();
    return axios
      .get(`${baseURI}/wallet`, {
        headers: { Authorization: token },
        params: {
          filter: { owner: profile.id },
          field: 'createdAt',
          order: 'DESC',
          perPage: 1,
          page: 1,
        },
      })
      .then((res) => dispatch(setWallet(res.data.data[0])))
      .catch((err) => Promise.reject(err.response.data.message));
  };
};

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
  return (dispatch, getState) => {
    const { profile } = getState();

    const data = { secret };
    if (profile.id) {
      data.userId = profile.id;
    }

    return axios
      .post(`${baseURI}/auth/token`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        dispatch(setAuthToken(response.data.token));
      });
  };
}

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
          type: LOG_IN,
        });
        return Promise.resolve();
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err.response.data.message);
      });
  };
};

export const getUser = (userId) => {
  return (dispatch, getState) => {
    const { token } = getState();
    dispatch(loading());

    return axios
      .get(`${baseURI}/user/${userId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err.response.data.message);
      });
  };
};

const getTransfers = (key) => {
  return (dispatch, getState) => {
    const { token, profile } = getState();
    dispatch(loading());

    return axios
      .get(`${baseURI}/transfer`, {
        headers: {
          Authorization: token,
        },
        params: {
          filter: { [key]: profile.id },
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err.response.data.message);
      });
  };
};

const getPayments = (key) => {
  return (dispatch, getState) => {
    const { token, profile } = getState();
    dispatch(loading());

    return axios
      .get(`${baseURI}/payment`, {
        headers: {
          Authorization: token,
        },
        params: {
          filter: { [key]: profile.id },
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err.response.data.message);
      });
  };
};

export const getTransfersToMe = () => {
  return getTransfers('transferredTo');
};

export const getTransfersFromMe = () => {
  return getTransfers('transferredFrom');
};

export const getPaymentsToMe = () => {
  return getPayments('paidTo');
};

export const getPaymentsFromMe = () => {
  return getPayments('paidBy');
};
