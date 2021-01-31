import React,{useState} from 'react'
import {View,Text} from 'react-native'
import Ripple from 'react-native-material-ripple'
import {useSelector} from 'react-redux'

import SeletModal from '../ModalUIs/SelectModal'

 import ModalStyles from '../ModalUIs/ModalStyles'
const ConfirmSendMoney = ({visible,setOpenSendConfrimModal}) => {

    const data = useSelector(state => state.activities.send)
    // console.log('object',data)
    
    return (
        <View>
            <SeletModal visible={visible} setOpenSendConfrimModal={setOpenSendConfrimModal}>
                <View style={ModalStyles.confirmHeader}>
                    <Text style={ModalStyles.headerTxt}>Send Money Success</Text>
                </View>
                <Text style={ModalStyles.text}>You have sent Amount {data.amount}</Text>
                <Text style={ModalStyles.text}>on phone number {data.receiver_phone}.</Text>
                {/* <Text style={ModalStyles.text}>Your balance is {data.new_balance}</Text> */}
                <Ripple onPress={setOpenSendConfrimModal} style={ModalStyles.button}>
                    <Text style={ModalStyles.btnText1}>Ok</Text>
                </Ripple>
            </SeletModal>
        </View>
    )
}

export default ConfirmSendMoney
