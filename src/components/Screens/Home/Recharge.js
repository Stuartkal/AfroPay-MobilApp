import React from 'react'
import { View, Alert} from 'react-native';

import Card from './Card'

import HomeStyles from './HomeStyles'
const Recharge = ({setOpenDepositModal,setOpenSendModal,setOpenWithdrawModal}) => {
  
    return (
        <View style={HomeStyles.rechargeRow}>
          <Card 
            title="Deposit"
            icon="add"
            onPress={() => setOpenDepositModal(true)} 
          />
          <Card 
            title="Send Money"
            icon="money"
            onPress={() => setOpenSendModal(true)}
          />
          <Card 
            title="Withdraw"
            icon="money-off"
            onPress={() => setOpenWithdrawModal(true)} 
          />
          <Card 
            title="Pay Bill"
            icon="payment"
            onPress={() => Alert.alert('Comming Soon!!')} 
          />
          <Card 
            title="Airtime"
            icon="phone-in-talk" 
            onPress={() => Alert.alert('Comming Soon!!')}
          />
        </View>
    )
}

export default Recharge
