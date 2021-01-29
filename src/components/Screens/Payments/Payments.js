import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'

import PaymentsStyles from './PaymentsStyles'
const Payments = (props) => {
 
  return (
    <View style={PaymentsStyles.container}>
        <View style={PaymentsStyles.row}>
            <View style={PaymentsStyles.rowCard}>
                <MaterialCommunityIcons name="bank-transfer" size={90} color="#6dae1e" />
                <Text style={PaymentsStyles.iconTxt}>Bank Transfers</Text>
            </View>
            <View style={PaymentsStyles.rowCard}>
                <FontAwesome name="mobile-phone" size={90} color="#6dae1e" />
                <Text style={PaymentsStyles.iconTxt}>Mobile Payments</Text>
            </View>
            <View style={PaymentsStyles.rowCard}>
                <MaterialCommunityIcons onPress={() => props.navigation.navigate({routeName: 'QRCodeScan'})} name="qrcode-scan" size={90} color="#6dae1e" />
                <Text style={PaymentsStyles.iconTxt}>QR Code Payments</Text>
            </View>
            <View style={PaymentsStyles.rowCard}>
                <MaterialCommunityIcons name="book-open-page-variant" size={90} color="#6dae1e" />
                <Text style={PaymentsStyles.iconTxt}>School Fees</Text>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  )
}

Payments.navigationOptions = (navData) => {
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

export default Payments


