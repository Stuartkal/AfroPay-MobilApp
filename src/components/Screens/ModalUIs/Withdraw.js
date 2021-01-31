import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { TextInput,Text,View,Modal, KeyboardAvoidingView} from 'react-native'
import Ripple from 'react-native-material-ripple'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import SelectModal from './SelectModal'
import * as actionTypes from '../../Store/ActionCreators'
import ConfirmWithdraw from '../Confirmation/ConfirmWithdraw'

import Color from '../../constants/Color'
import ModalStyles from './ModalStyles'
const Withdraw = ({visible,setOpenWithdrawModal}) => {

    const [amount, setAmount] = useState('')
    const [agent_id, setAgent_id] = useState('')

    const [openWithdrawConfirmModal ,setOpenWithdrawConfirmModal] = useState(false)

    const [error, setError] = useState('')
    
    const data = useSelector(state => state.activities.withdraw)
 

    // console.log('object',data)
    const [open ,setOpen] = useState(false)

    useEffect(() => {
       if(amount >= 3){
           setError('')
       }
    }, [amount])

    const dispatch = useDispatch()

    const handleWithdrawSubmit = () => {
        dispatch(actionTypes.withdraw(amount,agent_id,(res)=>{
            console.log('status',res.success)
            if(res.success === true){
                setOpen(true)
                setError('')
            }
            if(res.success === false){
                setError('Please enter all fields with correct details')
            }
        }))
    }

    const handleCancelSubmit = () => {
        dispatch(actionTypes.withdrawCancel(data.id))
        setOpen(false)
        }

        const handleConfirmSubmit = () => {
            dispatch(actionTypes.withdrawApproval(data.id))
            setOpen(false)
            // setOpenWithdrawModal(false)
            setOpenWithdrawConfirmModal(true)
            setAmount('')
            setAgent_id('')
            }

//Input Validators


    return (
        <KeyboardAvoidingView  behavior="height">
            <Modal 
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <ConfirmWithdraw
                visible={openWithdrawConfirmModal}
                setOpenWithdrawConfirmModal={setOpenWithdrawConfirmModal}
                />

                <SelectModal visible={open} close={setOpen}>
                    <View style={ModalStyles.confirmHeader}>
                        <Text style={ModalStyles.headerTxt}>Withdraw Confirmation</Text>
                    </View>
                    <Text style={ModalStyles.text}>Your Withdrawing Amount {data.amount}</Text>
                    <Text style={ModalStyles.text}>from Agent {data.agent_id}</Text>
                    <Text style={ModalStyles.text}>{data.status}...</Text>
                    <View style={ModalStyles.btnRow}>
                        <Ripple onPress={handleCancelSubmit} style={ModalStyles.btn}>
                            <Text style={ModalStyles.btnText1}>Cancel</Text>
                        </Ripple>
                        <Ripple onPress={handleConfirmSubmit} style={ModalStyles.btn}>
                            <Text style={ModalStyles.btnText1}>Confirm</Text>
                        </Ripple>
                    </View>
                </SelectModal>

            <View style={ModalStyles.backdrop}>
                <View style={ModalStyles.container4}>
                    <View style={ModalStyles.header2}>
                        <View style={ModalStyles.headerInner}>
                            <Ionicons onPress={() => setOpenWithdrawModal(false)} name="close" size={30} color={Color.primary} />
                            {
                                error ? <Text style={{color:'red',fontSize:18}}>{error}</Text> 
                                : <Text style={ModalStyles.headerTxt2}>Withdraw Money</Text>
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
