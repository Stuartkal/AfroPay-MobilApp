import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import Deposit from './Deposit'
import SendMoney from './SendMoney'
import Withdraw from './Withdraw'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from '../../store/ActionCreators'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'

import Styles from './Styles'
const Payments = () => {

    const balance = useSelector(state => state.auth._balance)
    const deposits = useSelector(state => state.receipts.deposites)
    const withdrawals = useSelector(state => state.receipts.withdrawals)
    const transfers = useSelector(state => state.receipts.transfers)
    console.log('withdrawals', withdrawals)

    const _balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionCreators.depositReceipts())
        dispatch(actionCreators.withdrawReceipts())
        dispatch(actionCreators.transferReceipts())
    }, [dispatch])

    return (
        <View style={Styles.paymentContainer}>
            <View style={Styles.balanceRow1}>
                <Text style={Styles.label1}>UGX</Text>
                <Text style={Styles.label2}>{_balance}</Text>
            </View>
            <Text style={Styles.label3}>Your available AfroPay balance</Text>
            <View style={Styles.paymentHistory}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={Styles.headerRow}>
                        <Text style={Styles.headerTxt}>Deposits</Text>
                    </View>
                    <Deposit deposits={deposits} />
                    <View style={Styles.headerRow}>
                        <Text style={Styles.headerTxt}>Transfers</Text>
                    </View>
                    <SendMoney transfers={transfers} />
                    <View style={Styles.headerRow}>
                        <Text style={Styles.headerTxt}>Withdrawals</Text>
                    </View>
                    <Withdraw withdrawals={withdrawals} />
                </ScrollView>
            </View>
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

export default Payments
