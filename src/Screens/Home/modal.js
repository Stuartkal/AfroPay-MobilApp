import React from 'react';
import { View } from 'react-native';
import Deposit from '../ModalUIs/Deposit';
import Withdraw from '../ModalUIs/Withdraw';

export default function Modal({
  activeModal,
  setActiveModal,
  getLatestWallet,
}) {
  return (
    <View>
      {activeModal === 'deposit' && (
        <Deposit
          closeModal={() => setActiveModal('')}
          getLatestWallet={getLatestWallet}
        />
      )}
      {activeModal === 'withdraw' && (
        <Withdraw
          closeModal={() => setActiveModal('')}
          getLatestWallet={getLatestWallet}
        />
      )}
    </View>
  );
}
