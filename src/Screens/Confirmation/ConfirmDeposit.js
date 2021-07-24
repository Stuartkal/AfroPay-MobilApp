import React from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useSelector } from 'react-redux';
import SelectModal from '../ModalUIs/SelectModal';
import Styles from '../ModalUIs/Styles';

const ConfirmDeposit = ({
  visible,
  setOpenDepositConfirmModal: setOpenDepositConfirmModal,
}) => {
  const data = useSelector((state) => state.activities.deposit);

  return (
    <View>
      <SelectModal visible={visible}>
        <View style={Styles.confirmHeader}>
          <Text style={Styles.headerTxt}>Deposit Success</Text>
        </View>
        <Text style={Styles.text}>You have Deposited Amount {data.amount}</Text>
        <Text style={Styles.text}>on phone number {data.phone}.</Text>
        <Text style={Styles.text}>Your balance is {data.account_balance}</Text>
        <Ripple onPress={setOpenDepositConfirmModal} style={Styles.button}>
          <Text style={Styles.btnText1}>Ok</Text>
        </Ripple>
      </SelectModal>
    </View>
  );
};

export default ConfirmDeposit;
