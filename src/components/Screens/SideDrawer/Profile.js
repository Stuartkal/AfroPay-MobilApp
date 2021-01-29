import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View,Text} from 'react-native'

import Styles from './Styles'
const Profile = (props) => {
    
    return (
        <View style={Styles.container}>
            <Text>Profile</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default Profile
