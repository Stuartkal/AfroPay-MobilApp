import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Alert } from 'react-native'
import Ripple from 'react-native-material-ripple'
import MaterialIons from 'react-native-vector-icons/MaterialIcons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'
import Color from '../../constants/Color'
import * as actionCreators from '../../store/ActionCreators'

import Deposit from '../ModalUIs/Deposit'
import SendMoney from '../ModalUIs/SendMoney'
import Withdraw from '../ModalUIs/Withdraw'

import Styles from './Styles'
const Home = () => {

    const [openDeposit, setDepositOpen] = useState(false)
    const [openSend, setSendOpen] = useState(false)
    const [openWithdraw, setWithdrawOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const balance = useSelector(state => state.auth._balance)
    const _balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    // console.log(balance, 'money')

    return (
        <View style={Styles.homeContainer}>
            <View style={Styles.balanceCard}>
                <View style={Styles.balanceRow}>
                    <Text style={Styles.label1}>UGX</Text>
                    <Text style={Styles.label2}>{_balance}</Text>
                </View>
                <Text style={Styles.label3}>Your available AfroPay balance</Text>
            </View>
            <View style={Styles.service}>
                <View style={Styles.serviceTxtRow}>
                    <Text style={Styles.serviceTxt2}>Recharge</Text>
                </View>
                <View style={Styles.homeRow}>
                    <Ripple onPress={() => setDepositOpen(true)} style={Styles.serviceCard}>
                        <MaterialIons name="add" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Deposit</Text>
                    </Ripple>
                    <Ripple onPress={() => setSendOpen(true)} style={Styles.serviceCard}>
                        <MaterialIons name="money" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Send</Text>
                    </Ripple>
                </View>
                <View style={Styles.homeRow}>
                    <Ripple onPress={() => setWithdrawOpen(true)} style={Styles.serviceCard}>
                        <MaterialIons name="money-off" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Withdraw</Text>
                    </Ripple>
                    <Ripple onPress={() => Alert.alert('Comming Soon!!')} style={Styles.serviceCard}>
                        <MaterialIons name="payment" size={40} color={Color.primary} />
                        <Text style={Styles.serviceTxt}>Pay Bill</Text>
                    </Ripple>
                </View>
            </View>
            <Deposit visible={openDeposit} setOpen={setDepositOpen} />
            <SendMoney visible={openSend} setOpen={setSendOpen} />
            <Withdraw visible={openWithdraw} setOpen={setWithdrawOpen} />
        </View>
    )
}

export const screenOptions = (navData) => {
    // console.log(navData, 'dd')
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(actionCreators.logout())
        navData.navigation.navigate('Login')
    }

    return {
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item
                    title="profile"
                    iconName="log-in-outline"
                    onPress={logout}
                />
            </HeaderButtons>
        )
    }
}

export default Home
