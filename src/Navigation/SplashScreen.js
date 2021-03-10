import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import logo from '../../assets/images/splash.png'

import Styles from './Styles'
const SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Login')
        }, 3000)
    }, [])

    return (
        <View style={Styles.splashscreenContainer}>
            <Image style={Styles.logo} source={logo} />
            <StatusBar hidden />
        </View>
    )
}

export default SplashScreen
