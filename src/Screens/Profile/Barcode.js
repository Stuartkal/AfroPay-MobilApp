import React from 'react';
import { Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../../constants/Color';
import * as actionCreators from '../../store/ActionCreators';
import Styles from './Styles';

const Barcode = (props) => {
  const link = useSelector((state) => state.activities.link);
  console.log(link, 'damn');

  const dispatch = useDispatch();

  const generateBarcodeHandler = () => {
    dispatch(
      actionCreators.generateBarcode((res) => {
        if (res.success === true) {
          props.navigation.navigate('GeneratedBarCode');
        }
      }),
    );
  };

  return (
    <View style={Styles.barcodeContainer}>
      <MaterialCommunityIcons
        name="qrcode-scan"
        size={80}
        color={Color.txtFaint}
      />
      <Text style={Styles.label}>Generate Barcode To Make Payments</Text>
      <Ripple onPress={generateBarcodeHandler} style={Styles.generateButton}>
        <Text style={Styles.btnTxt}>Generate barcode</Text>
      </Ripple>
    </View>
  );
};

export default Barcode;
