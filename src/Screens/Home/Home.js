import React, { useState, useEffect } from 'react';
import { Alert, Dimensions, ScrollView, Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import MaterialIons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { connect, useDispatch, useSelector } from 'react-redux';
import Color from '../../constants/Color';
import HeaderBtn from '../../Navigation/HeaderBtn';
import { getWallet, getAuthToken } from '../../requests';
import Deposit from '../ModalUIs/Deposit';
import SendMoney from '../ModalUIs/SendMoney';
import Withdraw from '../ModalUIs/Withdraw';
import Styles from './Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const mapState = ({ wallet }) => ({ wallet });
const connector = connect(mapState);

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();

  const [openDeposit, setDepositOpen] = useState(false);
  const [openSend, setSendOpen] = useState(false);
  const [openWithdraw, setWithdrawOpen] = useState(false);

  const balance = useSelector(({ wallet }) => wallet.balance);
  const _balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const getLatestWallet = () => dispatch(getWallet());

  useState(() => {
    dispatch(getAuthToken());
    dispatch(getWallet());
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getWallet());
    });

    return () => unsubscribe();
  }, [dispatch, navigation]);

  return (
    <View style={Styles.homeContainer}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ width: screenWidth, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.balanceCard}>
          <View style={Styles.balanceRow}>
            <Text style={Styles.label1}>UGX</Text>
            <Text style={Styles.label2}>{_balance}</Text>
          </View>
          <Text style={Styles.label3}>Your available AfroPay balance</Text>
        </View>
        <View style={Styles.service}>
          <View style={Styles.serviceTxtRow}>
            <Text style={Styles.serviceTxt2}>Recharge</Text>
          </View>
          <View style={Styles.homeRow}>
            <Ripple
              onPress={() => setDepositOpen(true)}
              style={Styles.serviceCard}>
              <MaterialCommunityIcons
                name="bank-transfer-in"
                size={40}
                color={Color.primary}
              />
              <Text style={Styles.serviceTxt}>Deposit</Text>
            </Ripple>
            <Ripple
              onPress={() => navigation.jumpTo('QRCode')}
              style={Styles.serviceCard}>
              <MaterialCommunityIcons
                name="bank-transfer"
                size={40}
                color={Color.primary}
              />
              <Text style={Styles.serviceTxt}>Transfer</Text>
            </Ripple>
          </View>
          <View style={Styles.homeRow}>
            <Ripple
              onPress={() => setWithdrawOpen(true)}
              style={Styles.serviceCard}>
              <MaterialCommunityIcons
                name="bank-transfer-out"
                size={40}
                color={Color.primary}
              />
              <Text style={Styles.serviceTxt}>Withdraw</Text>
            </Ripple>
            <Ripple
              onPress={() => Alert.alert('Comming Soon!!')}
              style={Styles.serviceCard}>
              <MaterialIons name="payment" size={40} color={Color.primary} />
              <Text style={Styles.serviceTxt}>Pay Bill</Text>
            </Ripple>
          </View>
        </View>
        <Deposit
          visible={openDeposit}
          setOpen={setDepositOpen}
          getLatestWallet={getLatestWallet}
        />
        <SendMoney
          visible={openSend}
          setOpen={setSendOpen}
          getLatestWallet={getLatestWallet}
          receiver=""
        />
        <Withdraw
          visible={openWithdraw}
          setOpen={setWithdrawOpen}
          getLatestWallet={getLatestWallet}
        />
      </ScrollView>
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

export default connector(Home);
