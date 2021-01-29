import axios from 'axios'
import * as actions from './actions'
import qs from 'qs'


export const loading = () => {
    return {
        type: actions.LOADING_ACTION
    }
}

export const error = () => {
    return {
        type: actionTypes.ERROR_ACTION
    }
}

export const loginSuccess = (name, email, phone, balance, role, token) => {
    return {
        type: actions.LOGIN_ACTION,
        name,
        email,
        phone,
        balance,
        role,
        token
    }
}

export const login = (email, password) => {
    return dispatch => {

        dispatch(loading())

        let requestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }
        
        const data = qs.stringify ({
            email,
            password
        })

        axios.post('http://165.22.196.206/api/auth/login',data,requestOptions)
        .then(res => {
            // console.log(res.data.access_token)
            dispatch(loginSuccess(res.data.name, res.data.email, res.data.phone, res.data.balance, res.data.role, res.data.access_token))
        })
        .catch(err => {
            dispatch(error())
            console.log(err)
        })
        
    }
}

export const registerAction = (message) => {
    return {
        type: actions.REGISTER_ACTION,
        message
    }
}

export const register = (name, email, phone, role, password, password_confirmation) => {
    return dispatch => {

        dispatch(loading())

        let requestOptions = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }
        
        const data = qs.stringify ({
            name,
            email,
            phone,
            role,
            password,
            password_confirmation
        })

        axios.post('http://165.22.196.206/api/auth/register',data,requestOptions)
        .then(res => {
            // console.log(res.data.message)
            dispatch(registerAction(res.data.message))
        })
        .catch(err => {
            dispatch(error())
            console.log(err)
        })
    }
}