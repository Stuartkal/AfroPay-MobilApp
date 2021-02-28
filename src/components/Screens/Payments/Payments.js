import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'
import DeposteReceipt from './DeposteReceipt'
import * as actionCreators from '../../Store/ActionCreators'
import ReceiptStyles from '../Receipts/ReceiptsStyles'
import WithdrawalReceipts from '../Payments/WithdrawalReceipts'
import TransferMoneyReceipts from '../Payments/TransferMoneyReceipts'

const Payments = () => {

  const balance = useSelector(state => state.auth._balance)
  const deposites = useSelector(state => state.receipts.deposites)
  const withdrawals = useSelector(state => state.receipts.withdrawals)
  const transfers = useSelector(state => state.receipts.transfers)

  console.log(withdrawals, 'fff')

  const _balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreators.depositReceipts())
    dispatch(actionCreators.withdrawReceipts())
    dispatch(actionCreators.transferReceipts())
  }, [dispatch])

  return (
    <View style={ReceiptStyles.container}>
      <View style={ReceiptStyles.transactionBalance}>
        <Text style={ReceiptStyles.txt1}>UGX</Text>
        <Text style={ReceiptStyles.txt2}>{_balance}</Text>
      </View>
      <Text style={ReceiptStyles.txt3}>Your Available AfoPay Balnace</Text>
      <View style={ReceiptStyles.recent}>
        <ScrollView style={ReceiptStyles.scroll} showsVerticalScrollIndicator={false}>
          <DeposteReceipt deposites={deposites} />
          <WithdrawalReceipts withdrawals={withdrawals} />
          <TransferMoneyReceipts transfers={transfers} />
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

Payments.navigationOptions = (navData) => {
  return {
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="profile"
          iconName="user-o"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  }
}

export default Payments