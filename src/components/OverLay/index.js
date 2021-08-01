import React from 'react';
import { ActivityIndicator, Dimensions, View, StyleSheet } from 'react-native';
import Colors from '../constants/Color';

export default function OverLay({ loading }) {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.overlay, { height, width }]}>
      <ActivityIndicator
        animating={loading}
        color={Colors.primary}
        size="large"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    // opacity: 0.3,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
});
