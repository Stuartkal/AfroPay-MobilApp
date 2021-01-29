import React from 'react'
import {Text, View, TouchableNativeFeedback } from 'react-native';
import HomeStyles from './HomeStyles'

const Icon = (props) => {
    return (
        <View style={HomeStyles.iconContainer}>
            <View style={HomeStyles.ripple}>
                <TouchableNativeFeedback onPress={props.onPress}>
                    <View style={HomeStyles.icon}>
                    {props.children}
                    </View>
                </TouchableNativeFeedback>
            </View>
            <Text style={HomeStyles.txt3}>{props.title}</Text>
        </View>
    )
}

export default Icon
