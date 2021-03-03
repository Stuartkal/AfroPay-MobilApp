import React from 'react'
import { Text, View } from 'react-native';

import PaymentsStyles from './PaymentsStyles'
const DeposteReceipt = ({ deposites }) => {

    return (
        <View style={PaymentsStyles.depositContainer}>
            <Text style={PaymentsStyles.recentTxt1}>Deposits</Text>
            {
                deposites.map(deposit => (
                    <View style={PaymentsStyles.recentContainer} key={deposit.id}>
                        <View style={PaymentsStyles.recentRow}>
                            <View style={PaymentsStyles.recentRow2}>
                                <Text style={PaymentsStyles.recentTxt}>Deposit to {deposit.phone}</Text>
                                <Text style={PaymentsStyles.time}>{deposit.date}</Text>
                            </View>
                            <View style={PaymentsStyles.recentColumn}>
                                <Text style={PaymentsStyles.recentTxt2}>UGX</Text>
                                <Text style={PaymentsStyles.recentTxt3}>+{deposit.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default DeposteReceipt