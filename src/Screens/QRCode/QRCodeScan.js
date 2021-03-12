import React, { useState } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'
import Styles from '../ModalUIs/Styles';

const QRCodeScan = () => {

    const [barCodeData, setBarCodeData] = useState('')

    const camera = React.useRef()

    return (
        <View style={styles.container}>
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
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
                onBarCodeRead={({ rawData, data }) => {
                    console.log(data, 'barcode')
                    setBarCodeData(data)
                }}
            />
            {barCodeData ? (
                <View style={{ alignSelf: 'center', position: 'absolute', top: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', width: '60%', height: 100 }}>
                    <Text style={Styles.barcodeText1}>BarCode Data</Text>
                    <Text style={Styles.barcodeText}>{barCodeData}</Text>
                </View>
            ) : null}
        </View>
    )
}

export const screenOptions = (navData) => {

    return {
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item
                    title="profile"
                    iconName="person-outline"
                    onPress={() => navData.navigation.navigate('Profile')}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',

    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    barcodeView: {
        position: 'absolute',
        top: 100,
        backgroundColor: '#fff',
        width: '50%',
        height: 90,
        alignContent: 'center',
        justifyContent: 'center'
    },
    barcodeText: {
        fontSize: 20
    },
    barcodeText1: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default QRCodeScan


