import { StyleSheet } from 'react-native'
import Color from '../constants/Color'

const Styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: Color.primary,
        marginBottom: 20
    },
    splashscreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.secondary
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    }
})

export default Styles