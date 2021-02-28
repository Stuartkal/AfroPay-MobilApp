import React from 'react'
import { Text, View } from 'react-native';

import PaymentsStyles from './PaymentsStyles'
const WithdrawalReceipts = ({ withdrawals }) => {

    return (
        <View style={PaymentsStyles.depositContainer}>
            <Text style={PaymentsStyles.recentTxt}>Withdrwawals</Text>
            {
                withdrawals.map(withdrawal => (
                    <View style={PaymentsStyles.recentContainer} key={withdrawal.id}>
                        <View style={PaymentsStyles.recentRow}>
                            <View style={PaymentsStyles.recentRow2}>
                                <Text style={PaymentsStyles.recentTxt}>Agent Id {withdrawal.agent_id}</Text>
                                <Text style={PaymentsStyles.time}>{withdrawal.date}</Text>
                            </View>
                            <View style={PaymentsStyles.recentColumn}>
                                <Text style={PaymentsStyles.recentTxt2}>UGX</Text>
                                <Text style={PaymentsStyles.recentTxt3}>+{withdrawal.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default WithdrawalReceipts