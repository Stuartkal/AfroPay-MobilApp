import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as actionCreators from '../Store/ActionCreators'

import Color from '../constants/Color'
const HeaderBtn = (props) => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(actionCreators.logout())
        props.navigation.navigate({ routeName: 'Auth' })
    }

    return <HeaderButton onPress={logout} {...props} IconComponent={Ionicons} iconSize={24} color={Color.primary} />
}
export default HeaderBtn
