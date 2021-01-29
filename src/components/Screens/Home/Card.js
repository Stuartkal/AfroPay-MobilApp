import React from 'react'
import { View, Text,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import Ripple from 'react-native-material-ripple'
import HomeStyles from './HomeStyles'

const Card = (props) => {
    // console.log(activities,'rrrrp')

    return (
        <Ripple 
            rippleSize={500}
            style={HomeStyles.rechargeCard}
            {...props}
        >
                <MaterialIcons name={props.icon} size={40} color="#6dae1e" />
                <Text style={HomeStyles.txt4}>{props.title}</Text>
        </Ripple>
    )
}

export default Card
