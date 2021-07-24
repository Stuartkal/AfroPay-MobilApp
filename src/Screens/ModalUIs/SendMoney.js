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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../../constants/Color';
import * as actionCreators from '../../store/ActionCreators';
import ConfirmTransfer from '../Confirmation/ConfirmTransfer';
import SelectModal from './SelectModal';
import Styles from './Styles';

const SendMoney = ({ visible, setOpen }) => {
  const [sending_option_id, setSending_option_id] = useState('');
  const [receiver_id, setReceiver_id] = useState('');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [remarks, setRemarks] = useState('');
  const [error, setError] = useState('');

  const balance = useSelector(({ wallet }) => wallet.balance);
  const _balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const [openSendConfirmModal, setOpenSendConfirmModal] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (amount >= 1) {
      setError('');
    }
  }, [amount]);

  const dispatch = useDispatch();

  const handleSendMoneySubmit = () => {
    dispatch(
      actionCreators.sendMoney(
        sending_option_id,
        receiver_id,
        amount,
        phone,
        remarks,
        (res) => {
          if (
            sending_option_id.length < 1 ||
            receiver_id < 1 ||
            amount < 3 ||
            phone < 10 ||
            remarks < 1
          ) {
            setError('Invalid input, enter all fields');
          }
          if (
            sending_option_id.length >= 1 ||
            receiver_id >= 1 ||
            amount >= 3 ||
            phone === 10 ||
            remarks >= 1
          ) {
            if (res.success === false) {
              return setError('User Not Found');
            }
            if (amount.localeCompare(balance) === 0) {
              return setError('You have insufficient balance to make transfer');
            }
            setOpenSendConfirmModal(true);
            setSending_option_id('');
            setReceiver_id('');
            setAmount('');
            setPhone('');
            setRemarks('');
          }
        },
      ),
    );
  };

  const handleMTNSubmit = () => {
    setSending_option_id('1');
    setShow(false);
  };

  const handleAirtelSubmit = () => {
    setSending_option_id('2');
    setShow(false);
  };

  const handleAfroPaySubmit = () => {
    setSending_option_id('3');
    setShow(false);
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <Modal animationType="slide" transparent={true} visible={visible}>
        <ConfirmTransfer
          visible={openSendConfirmModal}
          setOpenSendConfirmModal={setOpenSendConfirmModal}
        />

        <SelectModal visible={show} close={setShow}>
          <View style={Styles.confirmHeader}>
            <Text style={Styles.headerTxt}>Choose Payment Method</Text>
          </View>
          <Ripple onPress={handleMTNSubmit} style={Styles.paymentBtn}>
            <Text style={Styles.btnTxt}>MTN Mobile Money</Text>
          </Ripple>
          <Ripple onPress={handleAirtelSubmit} style={Styles.paymentBtn}>
            <Text style={Styles.btnTxt}>Airtel Money</Text>
          </Ripple>
          <Ripple onPress={handleAfroPaySubmit} style={Styles.paymentBtn}>
            <Text style={Styles.btnTxt}>Afropay</Text>
          </Ripple>
        </SelectModal>

        <View style={Styles.backdrop}>
          <View style={Styles.container3}>
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
                  <Text style={Styles.headerTxt2}>Send Money</Text>
                )}

                <View style={{ width: 30 }} />
              </View>
            </View>
            <Text style={Styles.lableTxt}>Enter Amount</Text>
            <View style={Styles.inputRow2}>
              <Text style={Styles.lableTxt}>UGX</Text>
              <TextInput
                style={Styles.input2}
                placeholder="1000"
                keyboardType="decimal-pad"
                onChangeText={(e) => setAmount(e)}
                // autoFocus={true}
              />
            </View>
            <Text style={{ color: Color.txtFaint, fontSize: 14 }}>
              Available Balance: {_balance}
            </Text>
            <View style={Styles.inputRow2}>
              <MaterialIcons
                style={{ marginRight: 10 }}
                name="phone-iphone"
                size={40}
                color={Color.primary}
              />
              <TextInput
                style={Styles.input2}
                placeholder="075--/070--/078--/077--"
                keyboardType="decimal-pad"
                onChangeText={(e) => setPhone(e)}
                // autoFocus={true}
              />
            </View>
            <View style={Styles.inputRow2}>
              <AntDesign
                style={{ marginRight: 10 }}
                name="idcard"
                size={40}
                color={Color.primary}
              />
              <TextInput
                style={Styles.input2}
                placeholder="Receiver Id"
                keyboardType="decimal-pad"
                onChangeText={(e) => setReceiver_id(e)}
                // autoFocus={true}
              />
            </View>
            <View style={Styles.inputRow2}>
              <MaterialIcons
                style={{ marginRight: 10 }}
                name="message"
                size={40}
                color={Color.primary}
              />
              <TextInput
                style={Styles.input2}
                placeholder="Remarks"
                returnKeyType="done"
                onChangeText={(e) => setRemarks(e)}
                // autoFocus={true}
              />
            </View>
            <View style={Styles.methodContainer}>
              <Ripple onPress={() => setShow(true)} style={Styles.methodRow}>
                <MaterialIcons
                  style={{ marginRight: 10 }}
                  name="payment"
                  size={40}
                  color="#fff"
                />
                <Text style={{ color: '#fff', fontSize: 18 }}>
                  Choose Payment Method
                </Text>
              </Ripple>
            </View>
            <Ripple
              onPress={handleSendMoneySubmit}
              activeOpacity={0.8}
              style={Styles.buttonContainer2}>
              <Text style={Styles.buttonText2}>Send Money</Text>
            </Ripple>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default SendMoney;
