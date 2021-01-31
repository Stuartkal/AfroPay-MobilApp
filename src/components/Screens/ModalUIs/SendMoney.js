import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { TextInput,Text,View,Modal, KeyboardAvoidingView} from 'react-native'
import Ripple from 'react-native-material-ripple'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import SelectModal from './SelectModal'
import * as actionTypes from '../../Store/ActionCreators'
import ConfirmSendMoney from '../Confirmation/ConfirmSendMoney'

import Color from '../../constants/Color'
import ModalStyles from './ModalStyles'
const SendMoney = ({visible,setOpenSendModal}) => {

    const [sending_option_id ,setSending_option_id] = useState('')
    const [receiver_id ,setReceiver_id] = useState('')
    const [amount ,setAmount] = useState('')
    const [phone ,setPhone] = useState('')
    const [remarks ,setRemarks] = useState('')

    const [error, setError] = useState('')

    const balance = useSelector(state => state.auth._balance)
    
    const [openSendConfrimModal ,setOpenSendConfrimModal] = useState(false)
    const [open ,setOpen] = useState(false)


    useEffect(()=>{
        if(amount >= 1){
            setError('')
        }
    },[amount])

    const dispatch = useDispatch()


   const handleSendMoneySubmit = () => {
        dispatch(actionTypes.sendMoney(sending_option_id,receiver_id,amount,phone,remarks,(res)=>{
            console.log('jodi',res)
            if(sending_option_id.length < 1 || receiver_id < 1 || amount < 3 || phone < 10 || remarks < 1){
                setError('Invalid input, enter all fields')
            }
            if(sending_option_id.length >= 1 || receiver_id >= 1 || amount >= 3 || phone === 10 || remarks >= 1){
                if(res.success === false){
                    return setError('User Not Found')
                }
                if(amount.localeCompare(balance) === 0){
                    return setError('You have insuficient balance to make transfer')
                }
                setOpenSendConfrimModal(true)
                setSending_option_id('')
                setReceiver_id('')
                setAmount('')
                setPhone('')
                setRemarks('')
            }
            
        }))
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
            <ConfirmSendMoney
            visible={openSendConfrimModal}
            setOpenSendConfrimModal={setOpenSendConfrimModal}
            />
            <SelectModal visible={open} close={setOpen}>
                <View style={ModalStyles.confirmHeader}>
                    <Text style={ModalStyles.headerTxt}>Choose Payment Method</Text>
                </View>
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
                            {
                                error ? <Text style={{color:'red',fontSize:18}}>{error}</Text> 
                                : <Text style={ModalStyles.headerTxt2}>Send Money</Text>
                            }
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
                        <Text style={{color:Color.txtFaint,fontSize:14}}>Avalilable Balance: {balance}</Text>
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
