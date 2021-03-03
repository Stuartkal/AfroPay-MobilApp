import axios from 'axios'
import * as actionTypes from './actions'

export const loading = () => {
    return {
        type: actionTypes.LOADING_ACTION
    }
}

export const withdrawReceiptsAction = (data) => {
    return {
        type: actionTypes.WITHDRAW_RECEIPTS_ACTION,
        data
    }
}

export const depositReceiptsAction = (data) => {
    return {
        type: actionTypes.DEPOSIT_RECEIPTS_ACTION,
        data
    }
}

export const transferReceiptsAction = (data) => {
    return {
        type: actionTypes.TRANSFER_RECEIPTS_ACTION,
        data
    }
}

export const withdrawReceipts = () => {
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
        axios.get('http://165.22.196.206/api/get_withdraws')
            .then(res => {
                // console.log(res.data)
                dispatch(withdrawReceiptsAction(res.data))
            })
            .catch(err => {
                // console.log(err.message)

            })
    }
}

export const depositReceipts = () => {
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
        axios.get('http://165.22.196.206/api/get_deposits')
            .then(res => {
                // console.log(res.data)
                dispatch(depositReceiptsAction(res.data))
            })
            .catch(err => {
                console.log(err.message)

            })
    }
}

export const transferReceipts = () => {
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
        axios.get('http://165.22.196.206/api/get_transfers')
            .then(res => {
                // console.log(res.data)
                dispatch(transferReceiptsAction(res.data))
            })
            .catch(err => {
                // console.log(err.message)

            })
    }
}
