import React from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useSelector } from 'react-redux';
import SeletModal from '../ModalUIs/SelectModal';
import Styles from '../ModalUIs/Styles';

const ConfirmDeposit = ({ visible, setOpenDepositConfrimModal }) => {
  const data = useSelector((state) => state.activities.deposit);
  // console.log('object',data)

  return (
    <View>
      <SeletModal visible={visible}>
        <View style={Styles.confirmHeader}>
          <Text style={Styles.headerTxt}>Deposit Success</Text>
        </View>
        <Text style={Styles.text}>You have Deposited Amount {data.amount}</Text>
        <Text style={Styles.text}>on phone number {data.phone}.</Text>
        <Text style={Styles.text}>Your balance is {data.account_balance}</Text>
        <Ripple onPress={setOpenDepositConfrimModal} style={Styles.button}>
          <Text style={Styles.btnText1}>Ok</Text>
        </Ripple>
      </SeletModal>
    </View>
  );
};

export default ConfirmDeposit;
