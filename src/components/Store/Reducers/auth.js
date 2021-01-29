import * as actions from '../ActionCreators/actions'
import {updateObject} from './utility'


const intitialState = {
    _name:'',
    _email:'',
    _phone:'',
    _balance:'',
    _role:'',
    _token:'',
    _message:'',
    authenticated: false,
    loading: false,
    error: false
}

const auth = (state = intitialState, action) => {
    switch(action.type){

        case actions.LOADING_ACTION: 
        return updateObject(state, {
            loading: true
        })
        
            case actions.LOGIN_ACTION:
            return updateObject(state, {
                authenticated: true,
                _name: action.name,
                _email: action.email,
                _phone: action.phone,
                _balance: action.balance,
                _role: action.role,
                _token: action.token
            })

            case actions.REGISTER_ACTION:
            return updateObject(state, {
                message: action.message
            })

            case actions.ERROR_ACTION: 
            return updateObject(state, {
                error: true
            })
            
        default: return state
    }
}

export default auth

