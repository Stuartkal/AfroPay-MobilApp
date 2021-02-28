import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../constants/Color'

const PaymentsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.main,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    rowCard: {
        width: '45%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        elevation: 1,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        backgroundColor: '#fff',
    },
    iconTxt: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold'
    },
    confirmTxt1: {
        fontSize: 20
    },
    confirmTxt2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    confirmTxt3: {
        fontSize: 20,
        fontWeight: '100',
        color: 'rgba(0,0,0,0.3)',
        paddingTop: 13
    },
    balanceTxt: {
        color: Color.txtFaint,
        fontWeight: '100'
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '70%',
        height: 40,
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: Color.txtFaint,

    },
    buttonContainer: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.primary,
        borderRadius: 10,
        height: 40,
        marginTop: 20
    },
    buttonText: {
        color: '#fff'
    },
    recent: {
        flex: 1,
        height: Dimensions.get('window').height > 800 ? 350 : 0,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 1,
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        marginTop: 10
    },
    depositContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    recentRow: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10
    },
    recentContainer: {
        flex: 1,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    recentRow2: {
        alignItems: 'flex-start',
        flexDirection: 'column'

    },
    recentColumn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    iconSpan: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#6dae1e60',
        marginRight: 10
    },
    recentTxt: {
        fontSize: 20,
    },
    time: {
        color: Color.txtFaint,
        fontSize: 18

    },
    recentTxt2: {
        fontSize: 20,
        color: 'rgba(0,0,0,0.5)'
    },
    recentTxt3: {
        fontSize: 25,
        color: Color.secondary
    },
})

export default PaymentsStyles