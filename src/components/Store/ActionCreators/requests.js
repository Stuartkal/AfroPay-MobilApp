import axios from 'axios'
import * as actionTypes from './actions'
import qs from 'qs'

export const loading = () => {
    return {
        type: actionTypes.LOADING_ACTION
    }
}


export const activitiesSucces = (data) => {
    return {
        type: actionTypes.GET_ACTIVITIES_ACTION,
        data
    }
}

export const getActivities = () => {
    return (dispatch, getState) => {

        dispatch(loading())

        const token = getState().auth._token

        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${token}`;
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        // console.log('object',token)
        axios.get('http://165.22.196.206/api/get_activities')
            .then(res => {
                // console.log(res.data)
                dispatch(activitiesSuccess(res.data))
            })
            .catch(err => {
                // console.log(err.message)

            })
    }
}

export const depositAction = (data) => {
    return {
        type: actionTypes.DEPOSIT_ACTION,
        data
    }
}

export const deposit = (amount, phone, payment_method_id, callback) => {
    return (dispatch, getState) => {

        dispatch(loading())

        const token = getState().auth._token

        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${token}`;
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        let requestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }

        const data = qs.stringify({
            amount,
            phone,
            payment_method_id
        })

        axios.post('http://165.22.196.206/api/deposit', data, requestOptions)
            .then(res => {
                // console.log(res)
                dispatch(depositAction(res.data))
                callback({ success: true, res })
            })
            .catch(err => {
                callback({ success: false, res: err })
                // console.log(err.message)
            })

    }
}

export const sendmoneyAction = (data) => {
    return {
        type: actionTypes.SEND_MONEY_ACTION,
        data
    }
}

export const sendMoney = (sending_option_id, receiver_id, amount, phone, remarks, callback) => {
    return (dispatch, getState) => {

        dispatch(loading())

        const token = getState().auth._token

        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${token}`;
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        let requestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }

        const data = qs.stringify({
            sending_option_id,
            receiver_id,
            amount,
            phone,
            remarks
        })

        axios.post('http://165.22.196.206/api/send', data, requestOptions)
            .then(res => {
                // console.log(res)
                dispatch(sendmoneyAction(res.data))
                callback({ success: true, res })
            })
            .catch(err => {
                callback({ success: false, res: err })
                // console.log(err.message)
            })
    }
}

export const withdrawAction = (data) => {
    return {
        type: actionTypes.WITHDRAW_ACTION,
        data
    }
}

export const withdraw = (amount, agent_id, callback) => {
    return (dispatch, getState) => {

        dispatch(loading())

        const token = getState().auth._token

        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${token}`;
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        let requestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }

        const data = qs.stringify({
            amount,
            agent_id,
        })

        axios.post('http://165.22.196.206/api/withdraw', data, requestOptions)
            .then(res => {
                // console.log(res)
                dispatch(withdrawAction(res.data))
                callback({ success: true, res })
            })
            .catch(err => {
                callback({ success: false, res: err })
                // console.log(err.message)
            })
    }
}

export const withdrawApprovalAction = (data) => {
    return {
        type: actionTypes.WITHDRAW_APPROVAL_ACTION,
        data
    }
}

export const withdrawApproval = (id) => {
    return (dispatch, getState) => {
        dispatch(loading())

        const token = getState().auth._token

        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${token}`;
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        // console.log('object',token)
        axios.get(`http://165.22.196.206/api/withdraws/approve/${id}`)
            .then(res => {
                // console.log(res.data)
                dispatch(withdrawApprovalAction(res.data))
            })
            .catch(err => {
                // console.log(err.message)

            })
    }
}

export const withdrawCancelAction = (data) => {
    return {
        type: actionTypes.WITHDRAW_CANCEL_ACTION,
        data
    }
}

export const withdrawCancel = (id) => {
    return (dispatch, getState) => {
        dispatch(loading())

        const token = getState().auth._token

        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${token}`;
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        // console.log('object',token)
        axios.get(`http://165.22.196.206/api/withdraws/cancel/${id}`)
            .then(res => {
                // console.log(res.data)
                dispatch(withdrawCancelAction(res.data))
            })
            .catch(err => {
                // console.log(err.message)

            })
    }
}


export const qrcodeScan = () => {
    return (dispatch, getState) => {
        dispatch(loading())

        const token = getState().auth._token
        console.log(token, 'token')
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${token}`;
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        axios.post('afropay.site/api/qr-code-user?qr_code=qhqYRM2QTU2oSq5bYim9szv0hECfvjWMWkNqdtJqRM1Y5')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}