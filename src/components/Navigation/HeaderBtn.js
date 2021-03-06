import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import { FontAwesome} from '@expo/vector-icons'
import Color from '../constants/Color'
const HeaderBtn = (props) => {
    return <HeaderButton {...props} IconComponent={FontAwesome} iconSize={24} color={Color.primary}/>
}
export default HeaderBtn
