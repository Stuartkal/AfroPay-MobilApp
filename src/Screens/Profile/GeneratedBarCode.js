import React from 'react'
import { View, Text, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Styles from './Styles'
const GeneratedBarCode = () => {

    const link = useSelector(state => state.activities.link)
    console.log(link, 'damn')

    return (
        <View style={Styles.barcodeContainer}>
            <Image style={Styles.image} source={{ uri: link }} />
        </View>
    )
}

export default GeneratedBarCode
