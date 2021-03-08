import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
const Withdraw = () => {
    return (
        <View style={Styles.recieptRow}>
            <View style={Styles.recentRow2}>
                <Text style={Styles.recentTxt}>Deposit to Stuwie</Text>
                <Text style={Styles.time}>satuday 10th Aug</Text>
            </View>
            <View style={Styles.recentRow2} >
                <Text style={Styles.recentTxt2}>UGX</Text>
                <Text style={Styles.recentTxt3}>+30000</Text>
            </View>
        </View>
    )
}

export default Withdraw
