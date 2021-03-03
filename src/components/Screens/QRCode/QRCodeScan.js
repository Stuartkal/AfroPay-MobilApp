import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderBtn from '../../Navigation/HeaderBtn'
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as actionCreators from '../../Store/ActionCreators'

import QRCodeStyles from './QRCodeStyles'

const QRCodeScan = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(actionCreators.qrcodeScan())
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }



    return (
        <View style={QRCodeStyles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ flex: 1, width: '100%' }}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            <StatusBar style="auto" />
        </View>
    )
}

QRCodeScan.navigationOptions = (navData) => {
    console.log('code', navData)
    return {
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item
                    title="profile"
                    iconName="user-o"
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
    }
}

export default QRCodeScan