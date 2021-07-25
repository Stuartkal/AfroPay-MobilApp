import axios from 'axios';
import { baseURI } from '../../config';
import * as actionTypes from './actions';

export const loading = () => {
  return {
    type: actionTypes.LOADING_ACTION,
  };
};

export const activitiesSuccess = (data) => {
  return {
    type: actionTypes.GET_ACTIVITIES_ACTION,
    data,
  };
};

export const getActivities = () => {
  return (dispatch, getState) => {
    dispatch(loading());

    const { token } = getState();

    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    axios
      .get('http://165.22.196.206/api/get_activities')
      .then((res) => {
        dispatch(activitiesSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const depositAction = (data) => {
  return {
    type: actionTypes.DEPOSIT_ACTION,
    data,
  };
};

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

    // TODO: COMPLETE TRANSFER
    return axios
      .post(
        `${baseURI}/wallet/withdraw`,
        {
          amount,
          senderId: profile.id,
          receiverId,
        },
        {
          headers: { Authorization: token, 'Content-Type': 'application/json' },
        },
      )
      .then((res) => Promise.resolve(res.data.redirect))
      .catch((err) => Promise.reject(err.response.data.message));
  };
};

export const qrcodeScan = () => {
  return (dispatch, getState) => {
    dispatch(loading());

    const { token } = getState();

    console.log(token, 'token');
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const qrcode = 'qhqYRM2QTU2oSq5bYim9szv0hECfvjWMWkNqdtJqRM1Y5';

    axios
      .post(`afropay.site/api/qr-code-user?qr_code=${qrcode}`)
      .then((res) => {
        console.log(res, 'qrcode');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setBarcode = (link) => {
  return {
    type: actionTypes.SET_BARCODE,
    link,
  };
};

export const generateBarcode = (callback) => {
  return (dispatch) => {
    const data = {
      _id: '3',
      name: 'Kalema Stuart',
      phoneNumber: '0706792740',
    };

    axios
      .get(
        `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=100x100`,
      )
      .then((res) => {
        dispatch(setBarcode(res.config.url));
        callback({ success: true, res });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
