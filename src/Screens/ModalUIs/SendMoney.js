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
import QRCode from 'react-native-qrcode-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../../assets/ic_launcher.png';
import { default as Color, default as Colors } from '../../constants/Color';
import { handleError } from '../../errors';
import { getUser, transfer } from '../../requests';
import Scan from '../QRCode/Scan';
import { isValidUUID } from '../QRCode/utils';
import Styles from './Styles';

const Transfer = ({ closeModal, getLatestWallet, receiver = '' }) => {
  const [receiverDetails, setReceiverDetails] = useState({});
  const [amount, setAmount] = useState();
  const [error, setError] = useState('');

  const balance = useSelector(({ wallet }) => wallet.balance);
  const _balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const dispatch = useDispatch();

  useEffect(() => {
    if (amount >= 1) {
      setError('');
    }
  }, [amount]);

  useEffect(() => {
    if (isValidUUID(receiver)) {
      dispatch(getUser(receiver))
        .then((response) => setReceiverDetails(response))
        .catch(setError);
    }
  }, [dispatch, receiver]);

  const handleSendMoneySubmit = () => {
    dispatch(transfer(Number(amount), receiver))
      .then((res) => {
        closeModal();
        getLatestWallet();
      })
      .catch((err) => handleError(['receiverId', 'amount1'], err, setError));
  };

  const isValidReceiver = isValidUUID(receiver);
  const userName = `${receiverDetails.firstName} ${receiverDetails.lastName}`;

  return (
    <KeyboardAvoidingView behavior="height">
      <Modal animationType="slide" transparent={true}>
        <View style={Styles.backdrop}>
          <View style={Styles.container3}>
            <View style={Styles.header2}>
              <View style={Styles.headerInner}>
                <Ionicons
                  onPress={() => closeModal()}
                  name="close"
                  size={30}
                  color={Color.primary}
                />
                {error ? (
                  <Text style={{ color: 'red', fontSize: 18 }}>{error}</Text>
                ) : (
                  <Text style={Styles.headerTxt2}>Transfer Money</Text>
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
              />
            </View>
            <Text style={{ color: Color.txtFaint, fontSize: 14 }}>
              Available Balance: {_balance}
            </Text>

            <View>
              {isValidReceiver && (
                <QRCode
                  size={230}
                  value={receiver}
                  logo={Logo}
                  color={Colors.primary}
                  quietZone={10}
                />
              )}
              {!isValidReceiver && <Scan />}
            </View>
            <View style={Styles.inputRow2}>
              <AntDesign
                style={{ marginRight: 10 }}
                name="idcard"
                size={40}
                color={Color.primary}
              />
              <TextInput
                value={userName}
                editable={false}
                style={Styles.input2}
                placeholder="Receiver Id"
              />
            </View>

            <Ripple
              onPress={handleSendMoneySubmit}
              activeOpacity={0.8}
              style={Styles.buttonContainer2}>
              <Text style={Styles.buttonText2}>Transfer Money</Text>
            </Ripple>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Transfer;
