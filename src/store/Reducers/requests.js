import * as actions from '../ActionCreators/actions'
import { updateObject } from './utility'


const intitialState = {
    activities: [],
    deposit: {},
    send: {},
    withdraw: {},
    withdraw_confrim: {},
    withdrawn: false,
    deposited: false,
    sent: false,
    withdraw_confrimed: false,
    link: '',
    loading: false,
    error: false
}

const requests = (state = intitialState, action) => {
    switch (action.type) {

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

        case actions.WITHDRAW_APPROVAL_ACTION:
            return updateObject(state, {
                withdraw_confrim: action.data,
                withdraw_confrimed: true,
                loading: false
            })

        case actions.ERROR_ACTION:
            return updateObject(state, {
                error: true
            })

        case actions.SET_BARCODE:
            return updateObject(state, {
                link: action.link
            })

        default: return state
    }
}

export default requests

