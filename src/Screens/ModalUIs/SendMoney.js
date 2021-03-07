import React from 'react'
import Ripple from 'react-native-material-ripple'
import { TextInput, Text, View, Modal, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SelectModal from './SelectModal'

import Color from '../../constants/Color'
import Styles from './Styles'
const SendMoney = () => {
    return (
        <KeyboardAvoidingView behavior="height">
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >

                <SelectModal>
                    <View style={Styles.confirmHeader}>
                        <Text style={Styles.headerTxt}>Choose Payment Method</Text>
                    </View>
                    <Ripple style={Styles.paymentBtn}>
                        <Text style={Styles.btnTxt}>MTN Mobile Money</Text>
                    </Ripple>
                    <Ripple style={Styles.paymentBtn}>
                        <Text style={Styles.btnTxt}>Airtel Money</Text>
                    </Ripple>
                </SelectModal>

                <View style={Styles.backdrop}>
                    <View style={Styles.container3}>
                        <View style={Styles.header2}>
                            <View style={Styles.headerInner}>
                                <Ionicons name="close" size={30} color={Color.primary} />
                                <Text style={Styles.headerTxt2}>Send Money</Text>

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
                            // autoFocus={true}
                            />
                        </View>
                        <Text style={{ color: Color.txtFaint, fontSize: 14 }}>Avalilable Balance: 0Shs</Text>
                        <View style={Styles.inputRow2}>
                            <MaterialIcons style={{ marginRight: 10 }} name="phone-iphone" size={40} color="#fff" color={Color.primary} />
                            <TextInput
                                style={Styles.input2}
                                placeholder="075--/070--/078--/077--"
                                keyboardType="decimal-pad"
                            // autoFocus={true}
                            />
                        </View>
                        <View style={Styles.inputRow2}>
                            <AntDesign style={{ marginRight: 10 }} name="idcard" size={40} color={Color.primary} />
                            <TextInput
                                style={Styles.input2}
                                placeholder="Receiver Id"
                                keyboardType="decimal-pad"
                            // autoFocus={true}
                            />
                        </View>
                        <View style={Styles.inputRow2}>
                            <MaterialIcons style={{ marginRight: 10 }} name="message" size={40} color="#fff" color={Color.primary} />
                            <TextInput
                                style={Styles.input2}
                                placeholder="Remarks"
                                returnKeyType="done"
                            // autoFocus={true}
                            />
                        </View>
                        <View style={Styles.methodContainer}>
                            <Ripple style={Styles.methodRow}>
                                <MaterialIcons style={{ marginRight: 10 }} name="payment" size={40} color="#fff" />
                                <Text style={{ color: '#fff', fontSize: 18 }}>Choose Payment Method</Text>
                            </Ripple>
                        </View>
                        <Ripple activeOpacity={0.8} style={Styles.buttonContainer2}>
                            <Text style={Styles.buttonText2}>Send Money</Text>
                        </Ripple>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default SendMoney
