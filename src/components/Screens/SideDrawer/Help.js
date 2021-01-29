import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View,Text} from 'react-native'

import Styles from './Styles'
const Help = (props) => {
    
    return (
        <View style={Styles.container}>
            <Text>Help</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default Help
