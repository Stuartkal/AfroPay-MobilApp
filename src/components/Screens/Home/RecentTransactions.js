import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import {Text, View} from 'react-native';

import HomeStyles from './HomeStyles'
const RecentTransactions = () => {
    return (
        <View style={HomeStyles.recentContainer}>
          <View style={HomeStyles.recentRow}>
            <View style={HomeStyles.recentRow2}>
              <View style={HomeStyles.iconSpan}>
                <MaterialIcons name="attach-money" size={15} color="#6dae1e" />
              </View>
              <Text style={HomeStyles.recentTxt}>Kenjoy Supermarket</Text>
            </View>
            <View style={HomeStyles.recentColumn}>
              <Text style={HomeStyles.recentTxt2}>UGX</Text>
              <Text style={HomeStyles.recentTxt3}>-12,200</Text>
            </View>
          </View>
        </View>
    )
}

export default RecentTransactions
