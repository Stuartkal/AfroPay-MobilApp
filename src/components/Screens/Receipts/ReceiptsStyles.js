import { StyleSheet } from 'react-native'
import Color from '../../constants/Color'

const ReceiptStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.main
    },
    scroll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactionBalance: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt1: {
        fontSize: 18
    },
    txt2: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    txt3: {
        fontSize: 14,
        color: Color.txtFaint,
    },
    scroll: {
        flex: 1,
        // backgroundColor: 'red',
        width: '100%'
    },
    recent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})

export default ReceiptStyles