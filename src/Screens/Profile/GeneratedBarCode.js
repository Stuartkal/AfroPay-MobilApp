import React from 'react';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import Styles from './Styles';

const GeneratedBarCode = () => {
  const link = useSelector((state) => state.activities.link);

  return (
    <View style={Styles.barcodeContainer}>
      <Image style={Styles.image} source={{ uri: link }} />
    </View>
  );
};

export default GeneratedBarCode;
