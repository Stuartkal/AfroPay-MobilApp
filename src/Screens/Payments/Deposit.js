import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles';

const Deposit = ({ deposits }) => {
  return (
    <View>
      <View style={Styles.headerRow}>
        <Text style={Styles.headerTxt}>Deposits</Text>
      </View>
      {deposits.map((deposit) => (
        <View style={Styles.recieptRow} key={deposit.id}>
          <View style={Styles.recentRow2}>
            <Text style={Styles.recentTxt}>Deposit to {deposit.phone}</Text>
            <Text style={Styles.time}>{deposit.date}</Text>
          </View>
          <View style={Styles.recentRow2}>
            <Text style={Styles.recentTxt2}>UGX</Text>
            <Text style={Styles.recentTxt3}>
              +{deposit.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Deposit;
