import React from 'react'
import { View, Text } from 'react-native'
import Ripple from 'react-native-material-ripple'
import MaterialIons from 'react-native-vector-icons/MaterialIcons'

import Color from '../../constants/Color'
import Styles from './Styles'

import Modal from '../ModalUIs/SendMoney'
const Home = () => {
    return (
        <View style={Styles.homeContainer}>
            {/* <Modal /> */}
            <View style={Styles.balanceCard}>
                <View style={Styles.balanceRow}>
                    <Text style={Styles.label1}>UGX</Text>
                    <Text style={Styles.label2}>Balance</Text>
                </View>
                <Text style={Styles.label3}>Your available AfroPay balance</Text>
            </View>
            <View style={Styles.service}>
                <View style={Styles.serviceTxtRow}>
                    <Text style={Styles.serviceTxt2}>Recharge</Text>
                </View>
                <View style={Styles.homeRow}>
                    <Ripple style={Styles.serviceCard}>
                        <MaterialIons name="add" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Deposit</Text>
                    </Ripple>
                    <Ripple style={Styles.serviceCard}>
                        <MaterialIons name="money" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Send</Text>
                    </Ripple>
                </View>
                <View style={Styles.homeRow}>
                    <Ripple style={Styles.serviceCard}>
                        <MaterialIons name="money-off" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Withdraw</Text>
                    </Ripple>
                    <Ripple style={Styles.serviceCard}>
                        <MaterialIons name="payment" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Pay Bill</Text>
                    </Ripple>
                </View>
            </View>
        </View>
    )
}

export default Home
