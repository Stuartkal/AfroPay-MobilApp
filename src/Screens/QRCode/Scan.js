import React, { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Vibration,
  View,
  ToastAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Colors from '../../constants/Color';
import { isValidUUID } from './utils';

const AnimatedView = ({ stopScanning }) => {
  const [moveAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const startAnimation = () => {
      moveAnim.setValue(400);

      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => startAnimation());
    };

    startAnimation();
  }, [moveAnim]);

  const handleStopScanning = () => {
    ToastAndroid.show('QR Code scan cancelled', ToastAndroid.SHORT);
    stopScanning();
  };

  return (
    <View style={[styles.preview, styles.alignCenter]}>
      <TouchableWithoutFeedback onPress={handleStopScanning}>
        <View style={[styles.blurredView, styles.fullWidth]} />
      </TouchableWithoutFeedback>
      <View style={styles.middleView}>
        <View style={styles.blurredView} />
        <Animated.View
          style={[styles.border, { transform: [{ translateY: moveAnim }] }]}
        />
        <View style={styles.blurredView} />
      </View>
      <TouchableWithoutFeedback onPress={handleStopScanning}>
        <View style={[styles.blurredView, styles.fullWidth]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default function Scan({ handlebarCodeData, stopScanning }) {
  const camera = React.useRef();

  const handleBarCodeRead = ({ data, type }) => {
    if (type === 'QR_CODE' && isValidUUID(data)) {
      Vibration.vibrate();
      handlebarCodeData(data);
      ToastAndroid.show('QR Code read successfully', ToastAndroid.SHORT);
    }
  };

  return (
    <RNCamera
      ref={camera}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      onBarCodeRead={handleBarCodeRead}>
      <AnimatedView stopScanning={stopScanning} />
    </RNCamera>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  animatedView: {
    flex: 1,
    width: '90%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    zIndex: 10,
    position: 'absolute',
  },
  border: { backgroundColor: Colors.primary, height: 2, width: '80%' },
  blurredView: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
  },
  fullWidth: {
    width: '100%',
  },
  middleView: {
    height: 400,
    width: '100%',
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
});
