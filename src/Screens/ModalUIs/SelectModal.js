import React from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import Styles from './Styles';

const SelectModal = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <TouchableWithoutFeedback onPress={() => props.close(false)}>
        <View style={Styles.selectContainer}>
          <View style={Styles.selectModal}>{props.children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SelectModal;
