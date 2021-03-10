import React, { useState, useEffect } from 'react'
import Ripple from 'react-native-material-ripple'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput, Text, View, Modal, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SelectModal from './SelectModal'
import ConfirmWithdraw from '../Confirmation/ConfirmWithdraw'
import * as actionCreators from '../../store/ActionCreators'

import Color from '../../constants/Color'
import Styles from './Styles'
const Withdraw = ({ visible, setOpen }) => {

    const [amount, setAmount] = useState('')
    const [agent_id, setAgent_id] = useState('')
    // console.log(amount, agent_id, 'mimi')

    const [openWithdrawConfirmModal, setOpenWithdrawConfirmModal] = useState(false)

    const [show, setShow] = useState(false)
    const [error, setError] = useState('')

    const data = useSelector(state => state.activities.withdraw)

    useEffect(() => {
        if (amount >= 3) {
            setError('')
        }
    }, [amount])

    const dispatch = useDispatch()

    const handleWithdrawSubmit = () => {
        dispatch(actionCreators.withdraw(amount, agent_id, (res) => {
            // console.log('status', res.success)
            if (res.success === true) {
                setShow(true)
                setError('')
            }
            if (res.success === false) {
                setError('Please enter all fields with correct details')
            }
        }))
    }

    const handleCancelSubmit = () => {
        dispatch(actionCreators.withdrawCancel(data.id))
        setShow(false)
    }

    const handleConfirmSubmit = () => {
        dispatch(actionCreators.withdrawApproval(data.id))
        setShow(false)
        setOpen(false)
        setOpenWithdrawConfirmModal(true)
        setAmount('')
        setAgent_id('')
    }

    return (
        <KeyboardAvoidingView behavior="height">
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >

                <ConfirmWithdraw
                    visible={openWithdrawConfirmModal}
                    setOpenWithdrawConfirmModal={setOpenWithdrawConfirmModal}
                />

                <SelectModal visible={show} close={setShow}>
                    <View style={Styles.confirmHeader}>
                        <Text style={Styles.headerTxt}>Withdraw Confirmation</Text>
                    </View>
                    <Text style={Styles.text}>Your Withdrawing {data.amount} </Text>
                    <Text style={Styles.text}>from Agent {data.agent_id} </Text>
                    <Text style={Styles.text}>{data.status}...</Text>
                    <View style={Styles.btnRow}>
                        <Ripple onPress={handleCancelSubmit} style={Styles.btn}>
                            <Text style={Styles.btnText1}>Cancel</Text>
                        </Ripple>
                        <Ripple onPress={handleConfirmSubmit} style={Styles.btn}>
                            <Text style={Styles.btnText1}>Confirm</Text>
                        </Ripple>
                    </View>
                </SelectModal>

                <View style={Styles.backdrop}>
                    <View style={Styles.container4}>
                        <View style={Styles.header2}>
                            <View style={Styles.headerInner}>
                                <Ionicons onPress={() => setOpen(false)} name="close" size={30} color={Color.primary} />
                                {
                                    error ? <Text style={{ color: 'red', fontSize: 18 }}>{error}</Text>
                                        : <Text style={Styles.headerTxt2}>Withdraw Money</Text>
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
                        <View style={Styles.inputRow2}>
                            <AntDesign style={{ marginRight: 10 }} name="idcard" size={40} color={Color.primary} />
                            <TextInput
                                style={Styles.input2}
                                placeholder="Agent Id"
                                onChangeText={(e) => setAgent_id(e)}
                            // autoFocus={true}
                            />
                        </View>
                        <Ripple onPress={handleWithdrawSubmit} activeOpacity={0.8} style={Styles.buttonContainer2}>
                            <Text style={Styles.buttonText2}>Withdraw Money</Text>
                        </Ripple>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default Withdraw
