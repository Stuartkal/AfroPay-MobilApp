import React from 'react';
import { Text, View } from 'react-native';

import Styles from './Styles';
const Transaction = () => {
  return (
    <View style={Styles.transaction}>
      <View style={Styles.transactionColumn}>
        <Text style={Styles.tTxt1}>AfroPay User</Text>
        <Text>Deposit</Text>
      </View>
      <View style={Styles.transactionColumn}>
        <Text style={Styles.tTxt2}>UGX</Text>
        <Text style={Styles.tTxt3}>12,000</Text>
      </View>
    </View>
  );
};
export default Transaction;
