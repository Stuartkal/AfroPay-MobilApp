import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
// import {useSelector} from 'react-redux'
import {Text, View, ScrollView} from 'react-native';

import * as actionTypes from '../../Store/ActionCreators'

import Transcation from './Transaction'
import Recharge from './Recharge'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'
import Deposit from '../ModalUIs/Deposit'
import SendMoney from '../ModalUIs/SendMoney'
import Withdraw from '../ModalUIs/Withdraw'

import Colors from '../../constants/Color'
import HomeStyles from './HomeStyles'

const Home = (props) => {

  

  const [openDepositModal, setOpenDepositModal] = useState(false)
  const [openSendModal, setOpenSendModal] = useState(false)
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false)
  // const activity = useSelector(state => state.activities.activities)
  
  


  return (
    <ScrollView style={{backgroundColor: Colors.main}} showsVerticalScrollIndicator={false}>
      <View style={HomeStyles.container}>
        <Transcation onPress={() => props.navigation.navigate({routeName: 'Payments'})}/>
        <View style={HomeStyles.header}>
          <Text style={HomeStyles.headerTxt}>Recharge</Text>
        </View>
        <Recharge 
          setOpenDepositModal={setOpenDepositModal} 
          setOpenSendModal={setOpenSendModal}
          setOpenWithdrawModal={setOpenWithdrawModal}
        />
        <Deposit 
          visible={openDepositModal} 
          setOpenDepositModal={setOpenDepositModal} 
        />
        <SendMoney 
          visible={openSendModal} 
          setOpenSendModal={setOpenSendModal}
          />
        <Withdraw 
          visible={openWithdrawModal} 
          setOpenWithdrawModal={setOpenWithdrawModal}
          />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  )
}

  Home.navigationOptions = (navData) => {
    return {
      headerRight:(
        <HeaderButtons HeaderButtonComponent={HeaderBtn}>
            <Item
                title="profile"
                iconName="user-o"
                onPress={()=> {
                 navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    )
    }
  }

export default Home




