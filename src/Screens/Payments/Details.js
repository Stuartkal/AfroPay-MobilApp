import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../requests';
import Styles from '../Home/Styles';

const DataItem = ({ label, value }) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 5,
      }}>
      <View style={[styles.dataItem]}>
        <Text style={[styles.boldText, styles.text]}>{label}: </Text>
        <Text style={styles.text}>
          {label === 'createdAt' ? new Date(value).toLocaleString() : value}
        </Text>
      </View>
    </View>
  );
};

export default function Details({
  route: {
    params: { isPayment, item },
  },
}) {
  const [currentItem, setItem] = useState(item);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const commonKeys = ['id', 'currency', 'amount', 'createdAt'];
  const profile = useSelector((state) => state.profile);
  const paidByMe = isPayment && item.paidBy === profile.id;
  const transferredByMe = !isPayment && item.transferredFrom === profile.id;
  const username = `${profile.firstName} ${profile.lastName}`;

  paidByMe ? (item.paidBy = username) : (item.paidTo = username);
  transferredByMe
    ? (item.transferredFrom = username)
    : (item.transferredTo = username);

  useEffect(() => {
    if (isPayment) {
      dispatch(getUser(paidByMe ? item.paidTo : item.paidBy))
        .then((res) => {
          const userName = `${res.firstName} ${res.lastName}`;
          const key = paidByMe ? 'paidTo' : 'paidBy';
          setItem({ ...item, [key]: userName });
        })
        .catch(setError);
    } else {
      dispatch(
        getUser(transferredByMe ? item.transferredTo : item.transferredFrom),
      )
        .then((res) => {
          const userName = `${res.firstName} ${res.lastName}`;
          const key = transferredByMe ? 'transferredTo' : 'transferredFrom';
          setItem({ ...item, [key]: userName });
        })
        .catch(setError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keys = isPayment
    ? [
        ...commonKeys,
        ...[
          'category',
          'country',
          'paidBy',
          'paidTo',
          'status',
          'type',
          'paymentReason',
        ],
      ]
    : [
        ...commonKeys,
        ...['transferredFrom', 'transferredTo', 'transferReason'],
      ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
        Receipt Details
      </Text>
      <View
        style={{
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.1)',
          height: 1,
        }}
      />
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      {keys.map((key) => (
        <DataItem key={key} label={key} value={currentItem[key]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  receipt: {
    alignItems: 'flex-start',
    width: '85%',
    padding: 10,
    backgroundColor: '#fff',
  },
  dataItem: { flexDirection: 'row', marginVertical: 5, width: '100%' },
  boldText: { fontWeight: 'bold' },
  errorText: { color: 'red', textAlign: 'center' },
});
