import React from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useSelector } from 'react-redux';
import SelectModal from '../ModalUIs/SelectModal';
import Styles from '../ModalUIs/Styles';

const ConfirmWithdraw = ({ visible, setOpenWithdrawConfirmModal }) => {
  const data = useSelector((state) => state.activities.withdraw_confrim);

  return (
    <View>
      <SelectModal
        visible={visible}
        setOpenWithdrawConfirmModal={setOpenWithdrawConfirmModal}>
        <View style={Styles.confirmHeader}>
          <Text style={Styles.headerTxt}>Withdraw Success</Text>
        </View>
        <Text style={Styles.text}>You have Withdrawn Amount {data.amount}</Text>
        <Text style={Styles.text}>from Agent {data.agent_id}.</Text>
        <Text style={Styles.text}>Status: {data.status}</Text>
        <Ripple onPress={setOpenWithdrawConfirmModal} style={Styles.button}>
          <Text style={Styles.btnText1}>Ok</Text>
        </Ripple>
      </SelectModal>
    </View>
  );
};

export default ConfirmWithdraw;
