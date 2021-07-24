import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderBtn from '../../Navigation/HeaderBtn';
import Deposit from './Deposit';
import SendMoney from './SendMoney';
import Styles from './Styles';
import Withdraw from './Withdraw';

const Payments = () => {
  const screenWidth = Dimensions.get('window').width;

  const { balance, deposits, transfers, withdrawals } = useSelector(
    ({ wallet, receipts }) => ({
      balance: wallet.balance,
      deposits: receipts.deposits,
      withdrawals: receipts.withdrawals,
      transfers: receipts.transfers,
    }),
  );

  const _balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actionCreators.depositReceipts());
  //   dispatch(actionCreators.withdrawReceipts());
  //   dispatch(actionCreators.transferReceipts());
  // }, [dispatch]);

  return (
    <View style={Styles.paymentContainer}>
      <View style={Styles.balanceRow1}>
        <Text style={Styles.label1}>UGX</Text>
        <Text style={Styles.label2}>{_balance}</Text>
      </View>
      <Text style={Styles.label3}>Your available AfroPay balance</Text>
      <View style={Styles.paymentHistory}>
        <ScrollView
          contentContainerStyle={{ width: screenWidth }}
          showsVerticalScrollIndicator={false}>
          {deposits.length <= 0 ? (
            <ActivityIndicator size="large" color="#6dae1e" />
          ) : (
            <View>
              <Deposit deposits={deposits} />
              <SendMoney transfers={transfers} />
              <Withdraw withdrawals={withdrawals} />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="profile"
          iconName="person-outline"
          onPress={() => navData.navigation.navigate('Profile')}
        />
      </HeaderButtons>
    ),
  };
};

export default Payments;
