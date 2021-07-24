import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles';

const SendMoney = ({ transfers }) => {
  return (
    <View>
      <View style={Styles.headerRow}>
        <Text style={Styles.headerTxt}>Transfers</Text>
      </View>
      {transfers.map((transfer) => (
        <View style={Styles.recieptRow} key={transfer.id}>
          <View style={Styles.recentRow2}>
            <Text style={Styles.recentTxt}>
              Sent to {transfer.receiver_phone}
            </Text>
            <Text style={Styles.time}>{transfer.date}</Text>
          </View>
          <View style={Styles.recentRow2}>
            <Text style={Styles.recentTxt2}>UGX</Text>
            <Text style={Styles.recentTxt3}>
              -
              {transfer.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SendMoney;
