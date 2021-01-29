import React from 'react'
import {TouchableWithoutFeedback,Modal,View} from 'react-native'

import ModalStyles from './ModalStyles'
const SelectModal = (props) => {
    return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
            >
                <TouchableWithoutFeedback onPress={() => props.close(false)}>
                    <View style={ModalStyles.selectContainer}>
                        <View style={ModalStyles.selectModal}>
                            {props.children}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
    )
}

export default SelectModal
