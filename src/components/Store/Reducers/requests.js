import * as actions from '../ActionCreators/actions'
import {updateObject} from './utility'


const intitialState = {
    activities:[],
    deposit:{},
    send:{},
    withdraw:{},
    deposited: false,
    sent: false,
    withdrawn: false,
    loading: false,
    error: false
}

const requests = (state = intitialState, action) => {
    switch(action.type){

        case actions.LOADING_ACTION: 
        return updateObject(state, {
            loading: true
        })
        
        case actions.GET_ACTIVITIES_ACTION: 
        return updateObject(state, {
            activities: action.data
        })
        
        case actions.DEPOSIT_ACTION: 
        return updateObject(state, {
            deposit: action.data,
            deposited: true,
            loading: false
        })

        case actions.SEND_MONEY_ACTION: 
        return updateObject(state, {
            send: action.data,
            sent: true,
            loading: false
        })

        case actions.WITHDRAW_ACTION: 
        return updateObject(state, {
            withdraw: action.data,
            withdrawn: true,
            loading: false
        })

        case actions.ERROR_ACTION: 
        return updateObject(state, {
            error: true
        })
            
        default: return state
    }
}

export default requests

