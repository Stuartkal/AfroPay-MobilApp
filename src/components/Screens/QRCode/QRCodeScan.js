import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View,Text} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'

import QRCodeStyles from './QRCodeStyles'
const QRCodeScan = (props) => {
    
    return (
        <View style={QRCodeStyles.container}>
            <Text>Scanner</Text>
            <StatusBar style="auto" />
        </View>
    )
}

QRCodeScan.navigationOptions = (navData) => {
    console.log('code',navData)
    return {
      headerRight:(
        <HeaderButtons HeaderButtonComponent={HeaderBtn}>
            <Item
                title="profile"
                iconName="user-o"
                onPress={()=> {
                 navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    )
    }
  }

export default QRCodeScan
