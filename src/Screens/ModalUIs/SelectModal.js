import React from 'react'
import { TouchableWithoutFeedback, Modal, View } from 'react-native'

import Styles from './Styles'
const SelectModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <TouchableWithoutFeedback>
                <View style={Styles.selectContainer}>
                    <View style={Styles.selectModal}>
                        {props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default SelectModal
