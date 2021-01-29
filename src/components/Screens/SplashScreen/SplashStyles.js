import {StyleSheet} from 'react-native'

import Color from '../../constants/Color'

const SplashStyles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Color.secondary
    },
    image: {
        width:300,
        height:300,
        resizeMode:'contain'
    }
})

export default SplashStyles