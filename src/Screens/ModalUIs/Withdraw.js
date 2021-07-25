/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
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
import ConfirmWithdraw from '../Confirmation/ConfirmWithdraw';
import Styles from './Styles';

const Withdraw = ({ visible, setOpen }) => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // eslint-disable-next-line prettier/prettier
  const [openWithdrawConfirmModal, setOpenWithdrawConfirmModal] =
    useState(false);

  useEffect(() => {
    if (amount >= 3) {
      setError('');
    }
  }, [amount]);

  const dispatch = useDispatch();

  const handleWithdrawSubmit = () => {
    dispatch(
      actionCreators.withdraw(Number(amount), `+256${phoneNumber.substr(1)}`),
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => handleError(['amount', 'phoneNumber'], err, setError));
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <Modal animationType="slide" transparent={true} visible={visible}>
        <ConfirmWithdraw
          visible={openWithdrawConfirmModal}
          setOpenWithdrawConfirmModal={setOpenWithdrawConfirmModal}
        />

        <View style={Styles.backdrop}>
          <View style={Styles.container4}>
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
                  <Text style={Styles.headerTxt2}>Withdraw Money</Text>
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
            <View style={Styles.inputRow2}>
              <MaterialIcons
                style={{ marginRight: 10 }}
                name="phone-iphone"
                size={40}
                color={Color.primary}
              />
              <TextInput
                style={Styles.input2}
                placeholder="Phone number"
                onChangeText={(e) => setPhoneNumber(e)}
                returnKeyType="next"
                keyboardType="numeric"
              />
            </View>
            <Ripple
              onPress={handleWithdrawSubmit}
              activeOpacity={0.8}
              style={Styles.buttonContainer2}>
              <Text style={Styles.buttonText2}>Withdraw Money</Text>
            </Ripple>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Withdraw;
