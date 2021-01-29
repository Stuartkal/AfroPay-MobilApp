import axios from 'axios'
import * as actionTypes from './actions'
import qs from 'qs'

export const loading = () => {
    return {
        type: actionTypes.LOADING_ACTION
    }
}

export const error = () => {
    return {
        type: actionTypes.ERROR_ACTION
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
            console.log(err.message)
            dispatch(error())
        })
    }
}

export const depositAction = (data) => {
    return {
        type: actionTypes.DEPOSIT_ACTION,
        data
    }
}

export const deposit = (amount,phone,payment_method_id) => {
    return (dispatch,getState) => {

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

        const data = qs.stringify ({
            amount,
            phone,
            payment_method_id
        })

        axios.post('http://165.22.196.206/api/deposit',data,requestOptions)
        .then(res => {
            console.log(res)
            dispatch(depositAction(res.data))
        })
        .catch(err => {
            dispatch(error())
            console.log(err.message)
        })

    }
}

export const sendmoneyAction = (data) => {
    return {
        type: actionTypes.SEND_MONEY_ACTION,
        data
    }
}

export const sendMoney = (sending_option_id,receiver_id,amount,phone,remarks) => {
    return (dispatch,getState) => {

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

        const data = qs.stringify ({
            sending_option_id,
            receiver_id,
            amount,
            phone,
            remarks
        })

        axios.post('http://165.22.196.206/api/send',data,requestOptions)
        .then(res => {
            console.log(res)
            dispatch(sendmoneyAction(res.data))
        })
        .catch(err => {
            dispatch(error())
            console.log(err.message)
        })
    }
}

export const withdrawAction = (data) => {
    return {
        type: actionTypes.WITHDRAW_ACTION,
        data
    }
}

export const withdraw = (amount,agent_id) => {
    return (dispatch,getState) => {

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

        const data = qs.stringify ({
            amount,
            agent_id,
        })

        axios.post('http://165.22.196.206/api/withdraw',data,requestOptions)
        .then(res => {
            console.log(res)
            dispatch(withdrawAction(res.data))
        })
        .catch(err => {
            dispatch(error())
            console.log(err.message)
        })
    }
}