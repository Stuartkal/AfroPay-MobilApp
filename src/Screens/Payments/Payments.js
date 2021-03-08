import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import Deposit from './Deposit'
import SendMoney from './SendMoney'
import Withdraw from './Withdraw'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from '../../store/ActionCreators'

import Styles from './Styles'
const Payments = () => {

    const balance = useSelector(state => state.auth._balance)
    const deposites = useSelector(state => state.receipts.deposites)
    const withdrawals = useSelector(state => state.receipts.withdrawals)
    const transfers = useSelector(state => state.receipts.transfers)
    console.log('deposite', deposites)

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
                    <Deposit deposites={deposites} />
                    <SendMoney transfers={transfers} />
                    <Withdraw withdrawals={withdrawals} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Payments
