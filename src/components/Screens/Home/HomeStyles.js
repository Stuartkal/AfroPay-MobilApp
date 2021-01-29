import {StyleSheet, Dimensions, Platform} from 'react-native'
import Color from '../../constants/Color'

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.main,
        alignItems: 'center',
        justifyContent: 'center',
      },
    transactionCard: {
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        elevation:1,
        borderRadius:5,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        backgroundColor:'#fff',
        paddingVertical:10,
        marginVertical:10
    },
    transactionBalance: {
        flexDirection:'row',
        width:'70%',
        alignItems:'center',
        justifyContent:'center'
    },
    txt1: {
        fontSize:18
    },
    txt2: {
        fontSize:35,
        fontWeight:'bold'
    },
    txt3: {
        fontSize:14,
        color: Color.txtFaint,
    },
    transactionIcons: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        width:'90%',
    },
    iconContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    icon: {
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:Color.primary
    },
    ripple:{
        borderRadius:30,
        overflow:'hidden',
        marginVertical:10,
        marginHorizontal:5
    },
    header: {
        width: '85%',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    headerTxt: {
        fontWeight:'bold',
        fontSize:18 ,
        color: Color.txtHeader
    },
    rechargeRow: {
        width:'95%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    // ripple: {
    //     width:'40%',
    //     height:130,
    //     backgroundColor:'#fff',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     marginHorizontal:20,
    //     marginVertical:10,
    //     elevation:1,
    //     borderRadius:5,
    //     shadowColor:'black',
    //     shadowOpacity:0.26,
    //     shadowOffset:{width:0, height:2},
    //     shadowRadius:6,
    // },
    rechargeCard: {
        width: Platform.OS === 'ios' ? '38%' : '40%',
        height:130,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:20,
        marginVertical:10,
        elevation:1,
        borderRadius:5,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
    },
    txt4: {
        fontSize:20,
        fontWeight:'bold',
        marginTop:5
    },
    recent: {
        flex:1,
        height: Dimensions.get('window').height > 800 ? 350 : 0,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingHorizontal:20,
        paddingVertical:10,
        elevation:1,
        shadowRadius:6,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        marginTop:10
    },
    dateTxt: {
        fontSize:15,
        color: Color.txtFaint,
        marginTop: 5
    },
    recentRow: {
        width:'95%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginVertical:10
    },
    recentContainer: {
        flex:1,
        width:'95%',
        alignItems:'center',
        justifyContent:'center'
    },
    recentRow2: {
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    recentColumn: {
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    iconSpan: {
        alignItems:'center',
        justifyContent:'center',
        width:25,
        height:25,
        borderRadius:5,
        backgroundColor:'#6dae1e60',
        marginRight:10
    },
    recentTxt: {
        fontSize:20,
    },
    recentTxt2: {
        fontWeight:'bold'
    },
    recentTxt3: {
        fontSize:25,
        color: Color.secondary
    },
    headerRecent: {
        width: '95%',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    }

})

export default HomeStyles