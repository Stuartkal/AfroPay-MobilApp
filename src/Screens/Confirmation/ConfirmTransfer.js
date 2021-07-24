import React from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useSelector } from 'react-redux';
import SeletModal from '../ModalUIs/SelectModal';
import Styles from '../ModalUIs/Styles';

const ConfirmTransfer = ({ visible, setOpenSendConfrimModal }) => {
  const data = useSelector((state) => state.activities.send);

  return (
    <View>
      <SeletModal
        visible={visible}
        setOpenSendConfrimModal={setOpenSendConfrimModal}>
        <View style={Styles.confirmHeader}>
          <Text style={Styles.headerTxt}>Send Money Success</Text>
        </View>
        <Text style={Styles.text}>You have sent Amount {data.amount}</Text>
        <Text style={Styles.text}>on phone number {data.receiver_phone}.</Text>
        {/* <Text style={ModalStyles.text}>Your balance is {data.new_balance}</Text> */}
        <Ripple onPress={setOpenSendConfrimModal} style={Styles.button}>
          <Text style={Styles.btnText1}>Ok</Text>
        </Ripple>
      </SeletModal>
    </View>
  );
};

export default ConfirmTransfer;
