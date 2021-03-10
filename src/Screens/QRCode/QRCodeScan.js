import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import * as actionCreators from '../../store/ActionCreators'

import HeaderBtn from '../../Navigation/HeaderBtn'

const QRCodeScan = () => {
    return (
        <View>
            <Text>QRCodeScan</Text>
        </View>
    )
}


export const screenOptions = (navData) => {

    return {
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item
                    title="profile"
                    iconName="person-outline"
                    onPress={() => navData.navigation.navigate('Profile')}
                />
            </HeaderButtons>
        )
    }
}


export default QRCodeScan
