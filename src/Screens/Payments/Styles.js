import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../constants/Color'

const Styles = StyleSheet.create({

    paymentContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.main
    },
    balanceRow1: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    },

    label1: {
        fontSize: 18,
    },
    label2: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    label3: {
        color: Color.txtFaint,
        fontSize: 15
    },
    paymentHistory: {
        marginTop: 40,
        paddingVertical: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        marginVertical: 20,
        width: '100%',
        height: 500,
        elevation: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        backgroundColor: '#fff',
    },
    recieptRow: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10
    },
    recentRow2: {
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    recentTxt: {
        fontSize: Dimensions.get('window').width < 800 ? 20 : 20,
        color: 'black'
    },
    recentColumn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    time: {
        color: Color.txtFaint,
        fontSize: Dimensions.get('window').width < 800 ? 18 : 18,

    },
    recentTxt2: {
        fontSize: Dimensions.get('window').width < 800 ? 15 : 20,
        color: 'rgba(0,0,0,0.5)'
    },
    recentTxt3: {
        fontSize: Dimensions.get('window').width < 800 ? 25 : 18,
        color: Color.secondary
    }

})

export default Styles