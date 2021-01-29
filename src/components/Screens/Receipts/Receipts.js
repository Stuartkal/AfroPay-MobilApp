import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import RecentTransactions from '../Home/RecentTransactions'

import ReceiptStyles from './ReceiptsStyles'
const Home = () => {
  return (
        <View style={ReceiptStyles.container}>
       <View style={ReceiptStyles.transactionBalance}>
            <Text style={ReceiptStyles.txt1}>UGX</Text>
            <Text style={ReceiptStyles.txt2}>2,213,987</Text>
        </View>
        <Text style={ReceiptStyles.txt3}>Your Available AfoPay Balnace</Text>
        <View style={ReceiptStyles.recent}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <RecentTransactions/>
            <RecentTransactions/>
            <RecentTransactions/>
            <RecentTransactions/>
            <RecentTransactions/>
            <RecentTransactions/>
            <RecentTransactions/>
            <RecentTransactions/>
            </ScrollView>
        </View>
      <StatusBar style="auto" />
    </View>

  )
}

export default Home


