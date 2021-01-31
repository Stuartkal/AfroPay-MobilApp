import React,{useState} from 'react'
import {View,Text} from 'react-native'
import Ripple from 'react-native-material-ripple'
import {useSelector} from 'react-redux'

import SeletModal from '../ModalUIs/SelectModal'

 import ModalStyles from '../ModalUIs/ModalStyles'
const ConfirmWithdraw = ({visible,setOpenWithdrawConfirmModal}) => {

    const data = useSelector(state => state.activities.withdraw_confrim)
    // console.log('object',data)
    
    return (
        <View>
            <SeletModal visible={visible} setOpenWithdrawConfirmModal={setOpenWithdrawConfirmModal}>
                <View style={ModalStyles.confirmHeader}>
                    <Text style={ModalStyles.headerTxt}>Withdraw Success</Text>
                </View>
                <Text style={ModalStyles.text}>You have Withdrawn Amount {data.amount}</Text>
                <Text style={ModalStyles.text}>from Agent {data.agent_id}.</Text>
                <Text style={ModalStyles.text}>Status: {data.status}</Text>
                <Ripple onPress={setOpenWithdrawConfirmModal} style={ModalStyles.button}>
                    <Text style={ModalStyles.btnText1}>Ok</Text>
                </Ripple>
            </SeletModal>
        </View>
    )
}

export default ConfirmWithdraw
