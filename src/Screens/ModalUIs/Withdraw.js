import React from 'react'
import Ripple from 'react-native-material-ripple'
import { TextInput, Text, View, Modal, KeyboardAvoidingView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SelectModal from './SelectModal'

import Color from '../../constants/Color'
import Styles from './Styles'
const Withdraw = () => {
    return (
        <KeyboardAvoidingView behavior="height">
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >

                <SelectModal>
                    <View style={Styles.confirmHeader}>
                        <Text style={Styles.headerTxt}>Withdraw Confirmation</Text>
                    </View>
                    <Text style={Styles.text}>Your Withdrawing Amount </Text>
                    <Text style={Styles.text}>from Agent </Text>
                    <Text style={Styles.text}>...</Text>
                    <View style={Styles.btnRow}>
                        <Ripple style={Styles.btn}>
                            <Text style={Styles.btnText1}>Cancel</Text>
                        </Ripple>
                        <Ripple style={Styles.btn}>
                            <Text style={Styles.btnText1}>Confirm</Text>
                        </Ripple>
                    </View>
                </SelectModal>

                <View style={Styles.backdrop}>
                    <View style={Styles.container4}>
                        <View style={Styles.header2}>
                            <View style={Styles.headerInner}>
                                <Ionicons name="close" size={30} color={Color.primary} />
                                <Text style={Styles.headerTxt2}>Withdraw Money</Text>

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
                        <View style={Styles.inputRow2}>
                            <AntDesign style={{ marginRight: 10 }} name="idcard" size={40} color={Color.primary} />
                            <TextInput
                                style={Styles.input2}
                                placeholder="Agent Id"
                            // autoFocus={true}
                            />
                        </View>
                        <Ripple activeOpacity={0.8} style={Styles.buttonContainer2}>
                            <Text style={Styles.buttonText2}>Withdraw Money</Text>
                        </Ripple>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default Withdraw
