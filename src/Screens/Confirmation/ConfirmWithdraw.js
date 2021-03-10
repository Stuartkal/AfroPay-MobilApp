import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { useSelector } from 'react-redux'

import SeletModal from '../ModalUIs/SelectModal'

import Styles from '../ModalUIs/Styles'
const ConfirmWithdraw = ({ visible, setOpenWithdrawConfirmModal }) => {

    const data = useSelector(state => state.activities.withdraw_confrim)
    // console.log('object',data)

    return (
        <View>
            <SeletModal visible={visible} setOpenWithdrawConfirmModal={setOpenWithdrawConfirmModal}>
                <View style={Styles.confirmHeader}>
                    <Text style={Styles.headerTxt}>Withdraw Success</Text>
                </View>
                <Text style={Styles.text}>You have Withdrawn Amount {data.amount}</Text>
                <Text style={Styles.text}>from Agent {data.agent_id}.</Text>
                <Text style={Styles.text}>Status: {data.status}</Text>
                <Ripple onPress={setOpenWithdrawConfirmModal} style={Styles.button}>
                    <Text style={Styles.btnText1}>Ok</Text>
                </Ripple>
            </SeletModal>
        </View>
    )
}

export default ConfirmWithdraw
