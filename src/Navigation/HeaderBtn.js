import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import Ionicons from 'react-native-vector-icons/Ionicons'


import Color from '../constants/Color'
const HeaderBtn = (props) => {


    return <HeaderButton  {...props} IconComponent={Ionicons} iconSize={24} color={Color.primary} />
}
export default HeaderBtn
