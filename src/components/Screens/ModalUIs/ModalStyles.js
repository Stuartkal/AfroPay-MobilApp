import {StyleSheet, Platform} from 'react-native'


import Color from '../../constants/Color'

const ModalStyles = StyleSheet.create({
    container2: {
        flex:1,
        alignItems:'center',
        position:'absolute',
        zIndex:1,
        bottom:0,
        width:'100%',
        height: Platform.OS === 'ios' ? '80%' : '60%',
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        // elevation:5,
        shadowRadius:6,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2}
    },
    container3: {
        flex:1,
        alignItems:'center',
        position:'absolute',
        zIndex:1,
        bottom:0,
        width:'100%',
        height: Platform.OS === 'ios' ? '98%' : '70%',
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        // elevation:5,
        shadowRadius:6,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2}
    },
    container4: {
        flex:1,
        alignItems:'center',
        position:'absolute',
        zIndex:1,
        bottom:0,
        width:'100%',
        height: Platform.OS === 'ios' ? '90%' : '50%',
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        // elevation:5,
        shadowRadius:6,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2}
    },
    backdrop: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    header2: {
        width: '100%',
        height:50,
        borderBottomWidth:1,
        borderBottomColor:Color.primary,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    headerInner: {
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'95%'
    },
    headerTxt2: {
        color: Color.primary,
        fontSize: 25,
    },
    lableTxt: {
        color: Color.primary,
        fontSize: 25
    },
    inputRow2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        width:'90%',
        marginTop:5,
        marginBottom:5,
    },
    input2: {
        alignItems:'center',
        justifyContent:'center',
        fontSize: 20,
        width:'80%',
        height: 50,
        marginTop:5,
        marginLeft:15,
        borderBottomWidth:1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    },
    methodContainer: {
        width:'80%',
        alignItems:'center',
        justifyContent:'center'
    },
    methodRow: {
        width:'80%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',borderRadius:5,
        backgroundColor: Color.secondary,
        marginVertical:5,
        marginTop:15
    },
    buttonContainer2: {
        width:'70%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Color.primary,
        borderRadius: 5,
        height:50,
        marginTop: 20
      },
      buttonText2: {
          color:'#fff',
          fontSize: 18
      },
      selectContainer: {
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'rgba(0,0,0,0.5)',
          position:'absolute',
          width:'100%',
          zIndex:100,
          top:0,
          bottom:0,
          left:0
      },
      selectModal: {
          alignItems:'center',
          justifyContent:'center',
          width:'70%',
          backgroundColor:'#fff',
          borderTopLeftRadius:5,
          borderTopRightRadius:5,
          borderBottomLeftRadius:5,
          borderBottomRightRadius:5,
          padding:20,
          elevation:1,
          shadowRadius:6,
          shadowColor:'black',
          shadowOpacity:0.26,
          shadowOffset:{width:0, height:2}
      },
      paymentBtn: {
          width:'80%',
          height:50,
          alignItems:'center',
          justifyContent:'center',
          marginVertical:5,
          borderWidth:1,
          borderColor: Color.primary
      },
      btnTxt: {
          color: Color.primary,
          fontSize:18
      }
})

export default ModalStyles