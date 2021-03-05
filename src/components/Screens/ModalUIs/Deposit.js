import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextInput, Text, View, Modal, KeyboardAvoidingView } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import SelectModal from './SelectModal'
import ConfirmDeposit from '../Confirmation/ConfirmDeposit'

import * as actionTypes from '../../Store/ActionCreators'
import Color from '../../constants/Color'
import ModalStyles from './ModalStyles'
const Deposit = ({ visible, setOpenDepositModal }) => {

    const [amount, setAmount] = useState('')
    const [phone, setPhone] = useState('')
    const [payment_method_id, setPayment_method_id] = useState('')
    // console.log('object',payment_method_id,phone,amount)
    const [error, setError] = useState('')

    const [openDepositConfrimModal, setOpenDepositConfrimModal] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (amount.length >= 3) {
            setError('')
        }
    }, [amount])

    const dispatch = useDispatch()

    const handleDepositeSubmit = () => {
        dispatch(actionTypes.deposit(amount, phone, payment_method_id, (res) => {
            if (res.success === false) {
                setError('Please enter all fields with correct details')
            }
            if (res.success === true) {
                setOpenDepositConfrimModal(true)
                setAmount('')
                setPhone('')
                setPayment_method_id('')
            }
        }))
    }

    const handleMTNSubmit = () => {
        setPayment_method_id('1')
        setOpen(false)
    }

    const handleAirtelSubmit = () => {
        setPayment_method_id('2')
        setOpen(false)
    }


    const phone_number = useSelector(state => state.auth._phone)

    return (
        <KeyboardAvoidingView behavior="height">
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <ConfirmDeposit
                    visible={openDepositConfrimModal}
                    setOpenDepositConfrimModal={setOpenDepositConfrimModal}
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
                    <View style={ModalStyles.container2}>
                        <View style={ModalStyles.header2}>
                            <View style={ModalStyles.headerInner}>
                                <Ionicons onPress={() => setOpenDepositModal(false)} name="close" size={30} color={Color.primary} />
                                {
                                    error ? <Text style={{ color: 'red', fontSize: 18 }}>{error}</Text>
                                        : <Text style={ModalStyles.headerTxt2}>Deposit Money</Text>
                                }
                                <View style={{ width: 30 }} />
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
                        <Text style={{ color: Color.txtFaint, fontSize: 14 }}>min: 500 max: 300,000</Text>
                        <View style={ModalStyles.inputRow2}>
                            <MaterialIcons style={{ marginRight: 10 }} name="phone-iphone" size={40} color="#fff" color={Color.primary} />
                            <TextInput
                                style={ModalStyles.input2}
                                keyboardType="decimal-pad"
                                onChangeText={(e) => setPhone(e)}
                                placeholder="075--/070--/078--/077--"
                                returnKeyType="done"
                            // autoFocus={true}
                            />
                        </View>
                        <View style={ModalStyles.methodContainer}>
                            <Ripple onPress={() => setOpen(true)} style={ModalStyles.methodRow}>
                                <MaterialIcons style={{ marginRight: 10 }} name="payment" size={40} color="#fff" />
                                <Text style={{ color: '#fff', fontSize: 18 }}>Choose Payment Method</Text>
                            </Ripple>
                        </View>
                        <Ripple onPress={handleDepositeSubmit} activeOpacity={0.8} style={ModalStyles.buttonContainer2}>
                            <Text style={ModalStyles.buttonText2}>Make Deposit</Text>
                        </Ripple>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default Deposit
