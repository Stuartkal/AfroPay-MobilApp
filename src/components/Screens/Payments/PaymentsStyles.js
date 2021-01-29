import {StyleSheet} from 'react-native'
import Color from '../../constants/Color'

const PaymentsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Color.main,
        alignItems: 'center',
        justifyContent: 'center',
      },
      row: {
          width:'95%',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'row',
          flexWrap:'wrap'
      },
      rowCard: {
          width:'45%',
          height:200,
          alignItems:'center',
          justifyContent:'center',
          marginVertical:10,
          marginHorizontal:5,
          elevation:1,
          borderRadius:5,
          shadowColor:'black',
          shadowOpacity:0.26,
          shadowOffset:{width:0, height:2},
          shadowRadius:6,
          backgroundColor:'#fff',
      },
      iconTxt: {
          fontSize:18,
          marginTop:20,
          fontWeight:'bold'
      },
      confirmTxt1: {
          fontSize:20
      },
      confirmTxt2: {
          fontSize:20,
          fontWeight:'bold'
      },
      confirmTxt3: {
        fontSize:20,
        fontWeight:'100',
        color:'rgba(0,0,0,0.3)',
        paddingTop:13
    },
    balanceTxt: {
        color:Color.txtFaint,
        fontWeight:'100'
    },
      inputRow: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      input: {
          width:'70%',
          height:40,
          marginVertical:20,
          textAlign:'center',
          fontSize: 20,
          fontWeight:'bold',
          marginHorizontal:5,
          borderBottomWidth:1,
          borderBottomColor: Color.txtFaint,
          
      },
      buttonContainer: {
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Color.primary,
        borderRadius: 10,
        height:40,
        marginTop:20
      },
      buttonText: {
          color:'#fff'
      }
})

export default PaymentsStyles