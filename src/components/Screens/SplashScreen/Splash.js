import React from 'react'
import {View, Image} from 'react-native';

import SplashStyles from './SplashStyles.js'
const Splash = () => {
    return (
        <View style={SplashStyles.container}>
            <Image style={SplashStyles.image} source={require('../../../../assets/images/logo1.png')}/>
        </View>
    )
}

export default Splash
