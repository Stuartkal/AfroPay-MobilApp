import { StyleSheet } from 'react-native'
import Color from '../../constants/Color'

const Styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.main,
        width: '100%'
    },
    proflabel: {
        fontSize: 25,
        fontWeight: '100',
        marginTop: 10
    },
    proflabel2: {
        fontSize: 20,
        fontWeight: '100',
    },
    proflabel3: {
        fontSize: 20,
        fontWeight: '100',
        color: Color.txtFaint
    },
    profileRow: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '85%',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        backgroundColor: '#fff',
        marginTop: 40
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Color.primary,
        marginRight: 10,
        marginLeft: 20
    },
    profile: {
        marginVertical: 20,
        paddingVertical: 10,
        width: '90%',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        backgroundColor: '#fff',
    },
    content2: {
        // marginBottom: 5,
        paddingLeft: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Color.txtFaint
    },
    content3: {
        // marginBottom: 5,
        paddingLeft: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    logout: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
        // borderBottomColor: Color.txtFaint,
        // borderTopColor: Color.txtFaint,
    },
    logoutTxt: {
        color: Color.primary,
        fontSize: 18,
        marginRight: 5
    }
})

export default Styles