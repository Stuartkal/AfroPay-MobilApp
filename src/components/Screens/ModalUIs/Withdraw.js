import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { TextInput,Text,View,Modal, KeyboardAvoidingView} from 'react-native'
import Ripple from 'react-native-material-ripple'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import * as actionTypes from '../../Store/ActionCreators'

import Color from '../../constants/Color'
import ModalStyles from './ModalStyles'
const Withdraw = ({visible,setOpenWithdrawModal}) => {

    const [amount, setAmount] = useState('')
    const [agent_id, setAgent_id] = useState('')
    console.log('object',amount,agent_id)
    
    const dispatch = useDispatch()

    const handleWithdrawSubmit = () => {
        dispatch(actionTypes.withdraw(amount,agent_id))
        setAmount('')
        setAgent_id('')
        setOpenWithdrawModal(false)
    }

    return (
        <KeyboardAvoidingView  behavior="height">
            <Modal 
                animationType="slide"
                transparent={true}
                visible={visible}
            >
            <View style={ModalStyles.backdrop}>
                <View style={ModalStyles.container4}>
                    <View style={ModalStyles.header2}>
                        <View style={ModalStyles.headerInner}>
                            <Ionicons onPress={() => setOpenWithdrawModal(false)} name="close" size={30} color={Color.primary} />
                            <Text style={ModalStyles.headerTxt2}>Withdraw Money</Text>
                            <View style={{width:30}}/>
                        </View>
                    </View>
                    <Text style={ModalStyles.lableTxt}>Enter Amount</Text>
                    <View style={ModalStyles.inputRow2}>
                        <Text style={ModalStyles.lableTxt}>UGX</Text>
                        <TextInput 
                            style={ModalStyles.input2}
                            placeholder="1000"
                            keyboardType="decimal-pad"
                            onChangeText={(e) => setAmount(e)}
                            // autoFocus={true}
                        />
                    </View>
                    <View style={ModalStyles.inputRow2}>
                        <AntDesign style={{marginRight:10}} name="idcard" size={40} color={Color.primary} />
                        <TextInput 
                            style={ModalStyles.input2}
                            placeholder="Agent Id"
                            onChangeText={(e) => setAgent_id(e)}
                            // autoFocus={true}
                        />
                    </View>
                    <Ripple onPress={handleWithdrawSubmit} activeOpacity={0.8} style={ModalStyles.buttonContainer2}>
                        <Text style={ModalStyles.buttonText2}>Withdraw Money</Text>
                    </Ripple>
                </View>
            </View>
        </Modal>
        </KeyboardAvoidingView>
    )
}

export default Withdraw
