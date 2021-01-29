import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { TextInput,Text,View,Modal, KeyboardAvoidingView} from 'react-native'
import Ripple from 'react-native-material-ripple'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import SelectModal from './SelectModal'
import * as actionTypes from '../../Store/ActionCreators'

import Color from '../../constants/Color'
import ModalStyles from './ModalStyles'
const SendMoney = ({visible,setOpenSendModal}) => {

    const [sending_option_id ,setSending_option_id] = useState('')
    const [receiver_id ,setReceiver_id] = useState('')
    const [amount ,setAmount] = useState('')
    const [phone ,setPhone] = useState('')
    const [remarks ,setRemarks] = useState('')

    // console.log('object',sending_option_id,receiver_id,phone,amount,remarks)

    const [open ,setOpen] = useState(false)

    const dispatch = useDispatch()

   const handleSendMoneySubmit = () => {
        dispatch(actionTypes.sendMoney(sending_option_id,receiver_id,amount,phone,remarks))
        setSending_option_id('')
        setReceiver_id('')
        setAmount('')
        setPhone('')
        setRemarks('')
        setOpenSendModal(false)
    }

    const handleMTNSubmit = () => {
        setSending_option_id('1')
        setOpen(false)
        }

        const handleAirtelSubmit = () => {
            setSending_option_id('2')
            setOpen(false)
            }

    return (
        <KeyboardAvoidingView behavior="height">
            <Modal 
                animationType="slide"
                transparent={true}
                visible={visible}
            >
            <SelectModal visible={open} close={setOpen}>
                <Ripple onPress={handleMTNSubmit} style={ModalStyles.paymentBtn}>
                    <Text style={ModalStyles.btnTxt}>MTN Mobile Money</Text>
                </Ripple>
                <Ripple onPress={handleAirtelSubmit} style={ModalStyles.paymentBtn}>
                    <Text style={ModalStyles.btnTxt}>Airtel Money</Text>
                </Ripple>
            </SelectModal>
            <View style={ModalStyles.backdrop}>
                <View style={ModalStyles.container3}>
                    <View style={ModalStyles.header2}>
                        <View style={ModalStyles.headerInner}>
                            <Ionicons onPress={() => setOpenSendModal(false)} name="close" size={30} color={Color.primary} />
                            <Text style={ModalStyles.headerTxt2}>Send Money</Text>
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
                        <Text style={{color:Color.txtFaint,fontSize:14}}>Avalilable Balance: 300,000</Text>
                    <View style={ModalStyles.inputRow2}>
                        <MaterialIcons style={{marginRight:10}} name="phone-iphone" size={40} color="#fff" color={Color.primary} />
                        <TextInput 
                            style={ModalStyles.input2}
                            placeholder="075--/070--/078--/077--"
                            keyboardType="decimal-pad"
                            onChangeText={(e) => setPhone(e)}
                            // autoFocus={true}
                        />
                    </View>
                    <View style={ModalStyles.inputRow2}>
                        <AntDesign style={{marginRight:10}} name="idcard" size={40} color={Color.primary} />
                        <TextInput 
                            style={ModalStyles.input2}
                            placeholder="Receiver Id"
                            keyboardType="decimal-pad"
                            onChangeText={(e) => setReceiver_id(e)}
                            // autoFocus={true}
                        />
                    </View>
                    <View style={ModalStyles.inputRow2}>
                        <MaterialIcons style={{marginRight:10}} name="message" size={40} color="#fff" color={Color.primary} />
                        <TextInput 
                            style={ModalStyles.input2}
                            placeholder="Remarks"
                            onChangeText={(e) => setRemarks(e)}
                            returnKeyType="done"
                            // autoFocus={true}
                        />
                    </View>
                    <View style={ModalStyles.methodContainer}>
                        <Ripple onPress={() => setOpen(true)} style={ModalStyles.methodRow}>
                            <MaterialIcons style={{marginRight:10}} name="payment" size={40} color="#fff" />
                            <Text style={{color:'#fff',fontSize:18}}>Choose Payment Method</Text>
                        </Ripple>
                    </View>
                    <Ripple onPress={handleSendMoneySubmit} activeOpacity={0.8} style={ModalStyles.buttonContainer2}>
                        <Text style={ModalStyles.buttonText2}>Send Money</Text>
                    </Ripple>
                </View>
            </View>
        </Modal>
        </KeyboardAvoidingView>
    )
}

export default SendMoney
