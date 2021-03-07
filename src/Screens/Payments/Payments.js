import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Receipt from './Receipt'

import Styles from './Styles'
const Payments = () => {
    return (
        <View style={Styles.paymentContainer}>
            <View style={Styles.balanceRow1}>
                <Text style={Styles.label1}>UGX</Text>
                <Text style={Styles.label2}>Balance</Text>
            </View>
            <Text style={Styles.label3}>Your available AfroPay balance</Text>
            <View style={Styles.paymentHistory}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                    <Receipt />
                    <Receipt />
                    <Receipt />
                    <Receipt />
                    <Receipt />
                    <Receipt />
                    <Receipt />
                    <Receipt />
                    <Receipt />
                </ScrollView>
            </View>
        </View>
    )
}

export default Payments
