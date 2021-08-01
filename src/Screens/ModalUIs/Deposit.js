/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Linking,
  Modal,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import Color from '../../constants/Color';
import { handleError } from '../../errors';
import * as actionCreators from '../../store/ActionCreators';
import Styles from './Styles';

const Deposit = ({ visible, setOpen, getLatestWallet }) => {
  const [amount, setAmount] = useState(0);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [method, setMethod] = useState('momo');

  useEffect(() => {
    if (amount.length >= 3) {
      setError('');
    }
  }, [amount]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(actionCreators.deposit(Number(amount), method, phone))
      .then((res) => {
        Linking.openURL(res);
        setOpen(false);
        getLatestWallet();
      })
      .catch((err) =>
        handleError(['amount', 'method', 'phoneNumber'], err, setError),
      );
  };

  const changePaymentMethod = () => {
    setMethod(method === 'momo' ? 'card' : 'momo');
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={Styles.backdrop}>
          <View style={Styles.container2}>
            <View style={Styles.header2}>
              <View style={Styles.headerInner}>
                <Ionicons
                  onPress={() => setOpen(false)}
                  name="close"
                  size={30}
                  color={Color.primary}
                />
                {error ? (
                  <Text style={{ color: 'red', fontSize: 18 }}>{error}</Text>
                ) : (
                  <Text style={Styles.headerTxt2}>Deposit Money</Text>
                )}
                <View style={{ width: 30 }} />
              </View>
            </View>
            <Text style={Styles.labelTxt}>Enter Amount</Text>
            <View style={Styles.inputRow2}>
              <Text style={Styles.labelTxt}>UGX</Text>
              <TextInput
                style={Styles.input2}
                placeholder="1000"
                keyboardType="decimal-pad"
                onChangeText={(e) => setAmount(e)}
              />
            </View>
            <Text style={{ color: Color.txtFaint, fontSize: 14 }}>
              min: 500 max: 300,000
            </Text>
            {method === 'momo' && (
              <View style={Styles.inputRow2}>
                <MaterialIcons
                  style={{ marginRight: 10 }}
                  name="phone-iphone"
                  size={40}
                  color={Color.primary}
                />
                <TextInput
                  style={Styles.input2}
                  keyboardType="decimal-pad"
                  placeholder="075--/070--/078--/077--"
                  returnKeyType="done"
                  onChangeText={(e) => setPhone(e)}
                />
              </View>
            )}
            <View style={Styles.methodContainer}>
              <Ripple onPress={changePaymentMethod} style={Styles.methodRow}>
                <MaterialIcons
                  style={{ marginRight: 10 }}
                  name="payment"
                  size={40}
                  color="#fff"
                />
                <Text style={{ color: '#fff', fontSize: 18 }}>
                  Deposit using {method === 'momo' ? 'card' : 'Mobile Money'}
                </Text>
              </Ripple>
            </View>
            <Ripple
              onPress={handleSubmit}
              activeOpacity={0.8}
              style={Styles.buttonContainer2}>
              <Text style={Styles.buttonText2}>Make Deposit</Text>
            </Ripple>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Deposit;
