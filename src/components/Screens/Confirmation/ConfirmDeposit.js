import React,{useState} from 'react'
import {View,Text} from 'react-native'
import Ripple from 'react-native-material-ripple'
import {useSelector} from 'react-redux'

import SeletModal from '../ModalUIs/SelectModal'

 import ModalStyles from '../ModalUIs/ModalStyles'
const ConfirmDeposit = ({visible,setOpenDepositConfrimModal}) => {

    const data = useSelector(state => state.activities.deposit)
    // console.log('object',data)
    

    return (
        <View>
            <SeletModal visible={visible} setOpenDepositConfrimModal={setOpenDepositConfrimModal}>
                <View style={ModalStyles.confirmHeader}>
                    <Text style={ModalStyles.headerTxt}>Deposit Success</Text>
                </View>
                <Text style={ModalStyles.text}>You have Deposited Amount {data.amount}</Text>
                <Text style={ModalStyles.text}>on phone number {data.phone}.</Text>
                <Text style={ModalStyles.text}>Your balance is {data.account_balance}</Text>
                <Ripple onPress={setOpenDepositConfrimModal} style={ModalStyles.button}>
                    <Text style={ModalStyles.btnText1}>Ok</Text>
                </Ripple>
            </SeletModal>
        </View>
    )
}

export default ConfirmDeposit
