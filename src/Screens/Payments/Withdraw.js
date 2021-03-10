import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
const Withdraw = ({ withdrawals }) => {
    return (
        <View>
            {withdrawals.map(withdrawal => (
                <View style={Styles.recieptRow} key={withdrawal.id}>
                    <View style={Styles.recentRow2}>
                        <Text style={Styles.recentTxt}>From AgentID {withdrawal.agent_id}</Text>
                        <Text style={Styles.time}>{withdrawal.date}</Text>
                    </View>
                    <View style={Styles.recentRow2} >
                        <Text style={Styles.recentTxt2}>UGX</Text>
                        <Text style={Styles.recentTxt3}>+{withdrawal.amount}</Text>
                    </View>
                </View>
            ))
            }
        </View>
    )
}

export default Withdraw
