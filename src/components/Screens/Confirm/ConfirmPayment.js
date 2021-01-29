import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View,TextInput,TouchableOpacity} from 'react-native';


import PaymentsStyles from '../Payments/PaymentsStyles'
const ConfirmPayments = () => {
  return (
    <View style={PaymentsStyles.container}>
        <Text style={PaymentsStyles.confirmTxt1}>How Much would you like to pay</Text>
        <Text style={PaymentsStyles.confirmTxt2}>Kenjoy Supermarket?</Text>
        <View style={PaymentsStyles.inputRow}>
          <Text style={PaymentsStyles.confirmTxt3}>UGX</Text>
          <TextInput style={PaymentsStyles.input}/>
        </View>
        <Text style={PaymentsStyles.balanceTxt}>My Balance: UGX 10000</Text>
        <TouchableOpacity activeOpacity={0.8} style={PaymentsStyles.buttonContainer}>
          <Text style={PaymentsStyles.buttonText}>Make Payment</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

export default ConfirmPayments


