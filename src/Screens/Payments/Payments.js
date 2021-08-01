import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Color';
import HeaderBtn from '../../Navigation/HeaderBtn';
import {
  getPaymentsFromMe,
  getPaymentsToMe,
  getTransfersFromMe,
  getTransfersToMe,
} from '../../requests';

const isPayment = (data) => (data.paidBy && data.paidTo ? true : false);

const PaymentItem = ({ item, profile: { id }, width, navigation }) => {
  const { paidBy, createdAt, amount } = item;
  const paidByMe = paidBy === id;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', { item, isPayment: isPayment(item) })
      }>
      <View style={[styles.listItem, { width }]}>
        <View>
          <Text style={styles.listText}>
            Payment of UGX {amount} {paidByMe ? 'by' : 'to'} me
          </Text>
          <Text style={[{ color: Colors.secondary }]}>
            {new Date(createdAt).toLocaleString()}
          </Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const TransferItem = ({ item, profile: { id }, width, navigation }) => {
  const { transferredBy, createdAt, amount } = item;
  const transferredByMe = transferredBy === id;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', { item, isPayment: isPayment(item) })
      }>
      <View style={[styles.listItem, { width }]}>
        <View>
          <Text style={styles.listText}>
            Transfer of UGX {amount} {transferredByMe ? 'by' : 'to'} me
          </Text>
          <Text style={[{ color: Colors.secondary }]}>
            {new Date(createdAt).toLocaleString()}
          </Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const ListItem = ({ item, navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const profile = useSelector((state) => state.profile);

  return isPayment(item) ? (
    <PaymentItem
      item={item}
      profile={profile}
      width={screenWidth - 50}
      navigation={navigation}
    />
  ) : (
    <TransferItem
      item={item}
      profile={profile}
      navigation={navigation}
      width={screenWidth - 50}
    />
  );
};

const keyExtractor = ({ id }) => id;

const renderItem =
  (navigation) =>
  ({ item }) =>
    <ListItem item={item} navigation={navigation} />;

const Payments = ({ navigation }) => {
  const [paymentsFromMe, setPaymentsFromMe] = useState([]);
  const [paymentsToMe, setPaymentsToMe] = useState([]);
  const [transfersToMe, setTransfersToMe] = useState([]);
  const [transfersFromMe, setTransfersFromMe] = useState([]);
  const [error, setError] = useState('');

  const allPaymentsAndTransfers = [
    ...paymentsFromMe,
    ...paymentsToMe,
    ...transfersFromMe,
    ...transfersToMe,
  ].sort((a, b) => (new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaymentsFromMe())
      .then((res) => {
        setPaymentsFromMe(res.data);
      })
      .catch(setError);

    dispatch(getPaymentsToMe())
      .then((res) => {
        setPaymentsToMe(res.data);
      })
      .catch(setError);
    dispatch(getTransfersFromMe())
      .then((res) => {
        setTransfersFromMe(res.data);
      })
      .catch(setError);
    dispatch(getTransfersToMe())
      .then((res) => {
        setTransfersToMe(res.data);
      })
      .catch(setError);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <FlatList
        renderItem={renderItem(navigation)}
        keyExtractor={keyExtractor}
        data={allPaymentsAndTransfers}
      />
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

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  listItem: {
    backgroundColor: Colors.primary,
    width: 350,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listText: {
    color: 'white',
  },
  errorText: { color: 'red', textAlign: 'center' },
});
