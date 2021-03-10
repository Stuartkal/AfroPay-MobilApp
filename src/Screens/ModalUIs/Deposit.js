import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Ripple from 'react-native-material-ripple'
import { TextInput, Text, View, Modal, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SelectModal from './SelectModal'
import ConfirmDeposit from '../Confirmation/ConfirmDeposit'
import * as actionCreators from '../../store/ActionCreators'

import Color from '../../constants/Color'
import Styles from './Styles'
const Deposit = ({ visible, setOpen }) => {

    const [amount, setAmount] = useState('')
    const [phone, setPhone] = useState('')
    const [payment_method_id, setPayment_method_id] = useState('')
    const [error, setError] = useState('')
    console.log(payment_method_id, 'fk')

    const [openDepositConfrimModal, setOpenDepositConfrimModal] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (amount.length >= 3) {
            setError('')
        }
    }, [amount])

    const dispatch = useDispatch()

    const handleDepositeSubmit = () => {
        dispatch(actionCreators.deposit(amount, phone, payment_method_id, (res) => {
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
        setShow(false)
    }

    const handleAirtelSubmit = () => {
        setPayment_method_id('2')
        setShow(false)
    }

    const handleAfroPaySubmit = () => {
        setPayment_method_id('3')
        setShow(false)
    }

    return (
        <KeyboardAvoidingView behavior="height">
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <ConfirmDeposit
                    visible={openDepositConfrimModal}
                    setOpenDepositConfrimModal={() => setOpenDepositConfrimModal(false)}
                />

                <SelectModal visible={show} close={setShow}>
                    <View style={Styles.confirmHeader}>
                        <Text style={Styles.headerTxt}>Choose Payment Method</Text>
                    </View>
                    <Ripple onPress={handleMTNSubmit} style={Styles.paymentBtn}>
                        <Text style={Styles.btnTxt}>MTN Mobile Money</Text>
                    </Ripple>
                    <Ripple onPress={handleAirtelSubmit} style={Styles.paymentBtn}>
                        <Text style={Styles.btnTxt}>Airtel Money</Text>
                    </Ripple>
                    <Ripple onPress={handleAfroPaySubmit} style={Styles.paymentBtn}>
                        <Text style={Styles.btnTxt}>Afropay</Text>
                    </Ripple>
                </SelectModal>

                <View style={Styles.backdrop}>
                    <View style={Styles.container2}>
                        <View style={Styles.header2}>
                            <View style={Styles.headerInner}>
                                <Ionicons onPress={() => setOpen(false)} name="close" size={30} color={Color.primary} />
                                {
                                    error ? <Text style={{ color: 'red', fontSize: 18 }}>{error}</Text>
                                        : <Text style={Styles.headerTxt2}>Deposit Money</Text>
                                }
                                <View style={{ width: 30 }} />
                            </View>
                        </View>
                        <Text style={Styles.lableTxt}>Enter Amount</Text>
                        <View style={Styles.inputRow2}>
                            <Text style={Styles.lableTxt}>UGX</Text>
                            <TextInput
                                style={Styles.input2}
                                placeholder="1000"
                                keyboardType="decimal-pad"
                                onChangeText={(e) => setAmount(e)}
                            // autoFocus={true}
                            />
                        </View>
                        <Text style={{ color: Color.txtFaint, fontSize: 14 }}>min: 500 max: 300,000</Text>
                        <View style={Styles.inputRow2}>
                            <MaterialIcons style={{ marginRight: 10 }} name="phone-iphone" size={40} color="#fff" color={Color.primary} />
                            <TextInput
                                style={Styles.input2}
                                keyboardType="decimal-pad"
                                placeholder="075--/070--/078--/077--"
                                returnKeyType="done"
                                onChangeText={(e) => setPhone(e)}
                            // autoFocus={true}
                            />
                        </View>
                        <View style={Styles.methodContainer}>
                            <Ripple onPress={() => setShow(true)} style={Styles.methodRow}>
                                <MaterialIcons style={{ marginRight: 10 }} name="payment" size={40} color="#fff" />
                                <Text style={{ color: '#fff', fontSize: 18 }}>Choose Payment Method</Text>
                            </Ripple>
                        </View>
                        <Ripple onPress={handleDepositeSubmit} activeOpacity={0.8} style={Styles.buttonContainer2}>
                            <Text style={Styles.buttonText2}>Make Deposit</Text>
                        </Ripple>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default Deposit
