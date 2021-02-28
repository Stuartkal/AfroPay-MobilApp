import React from 'react'
import { Text, View } from 'react-native';

import PaymentsStyles from './PaymentsStyles'
const TransferMoneyReceipts = ({ transfers }) => {

    return (
        <View style={PaymentsStyles.depositContainer}>
            <Text style={PaymentsStyles.recentTxt}>Transfers</Text>
            {
                transfers.map(transfer => (
                    <View style={PaymentsStyles.recentContainer} key={transfer.id}>
                        <View style={PaymentsStyles.recentRow}>
                            <View style={PaymentsStyles.recentRow2}>
                                <Text style={PaymentsStyles.recentTxt}>Sent to {transfer.receiver_phone}</Text>
                                <Text style={PaymentsStyles.time}>{transfer.date}</Text>
                            </View>
                            <View style={PaymentsStyles.recentColumn}>
                                <Text style={PaymentsStyles.recentTxt2}>UGX</Text>
                                <Text style={PaymentsStyles.recentTxt3}>+{transfer.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default TransferMoneyReceipts