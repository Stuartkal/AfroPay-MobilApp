import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux'
import {Feather,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import Icon from './Icon'

import HomeStyles from './HomeStyles'

const Transaction = (props) => {

  const balance = useSelector(state => state.auth._balance)

  return (
    
        <View style={HomeStyles.transactionCard}>
            <View style={HomeStyles.transactionBalance}>
                <Text style={HomeStyles.txt1}>UGX </Text>
                <Text style={HomeStyles.txt2}>{balance}</Text>
            </View>
            <Text style={HomeStyles.txt3}>Your Available AfoPay Balnace</Text>
            <View style={HomeStyles.transactionIcons}>
                <Icon onPress={props.onPress} title="Transfer">
                  <Feather  name="smartphone" size={30} color="#fff" />
                </Icon>   
                <Icon title="History">
                  <MaterialCommunityIcons name="history" size={30} color="#fff" />
                </Icon>
                <Icon title="Deposit">
                  <Ionicons name="ios-add" size={30} color="#fff" />
                </Icon>   
                <Icon title="Scan Code">
                  <MaterialCommunityIcons name="qrcode-scan" size={30} color="#fff" />
                </Icon>   
            </View>
        </View>
      
  )
}

export default Transaction


