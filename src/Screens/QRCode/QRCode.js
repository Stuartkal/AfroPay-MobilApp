import CameraRoll from '@react-native-community/cameraroll';
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import { launchImageLibrary } from 'react-native-image-picker';
import QRCode from 'react-native-qrcode-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import RNQRGenerator from 'rn-qr-generator';
import Logo from '../../../assets/ic_launcher.png';
import Colors from '../../constants/Color';
import { getWallet } from '../../requests';
import SendMoney from '../ModalUIs/SendMoney';
import Scan from './Scan';
import { checkPermissions, isValidUUID } from './utils';

const QRCodeScan = () => {
  const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [receiver, setReceiver] = useState('');
  const {
    id: userId,
    firstName,
    lastName,
  } = useSelector(({ profile }) => profile);

  const ref = useRef();
  const dispatch = useDispatch();
  const getLatestWallet = () => dispatch(getWallet());

  const saveQrToDisk = () => {
    if (ref.current) {
      checkPermissions();
      ref.current.setNativeProps({ quietZone: 10 });
      ref.current.toDataURL((data) => {
        RNFS.writeFile(
          RNFS.CachesDirectoryPath + `/afro-pay-${userId}.png`,
          data,
          'base64',
        )
          .then(() =>
            CameraRoll.save(
              RNFS.CachesDirectoryPath + `/afro-pay-${userId}.png`,
              { type: 'photo' },
            ),
          )
          .then(() => {
            ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);
          });
      });
    }
  };

  const handlebarCodeData = (data) => {
    setIsScanning(false);
    setReceiver(data);
    setIsTransferModalVisible(true);
  };

  const readFromImage = () => {
    launchImageLibrary(
      { selectionLimit: 1, includeBase64: true },
      (ImagePickerResponse) => {
        if (ImagePickerResponse.didCancel) {
          ToastAndroid.show('Image Picker canceled', ToastAndroid.SHORT);
        } else {
          if (ImagePickerResponse.assets) {
            const [{ base64 }] = ImagePickerResponse.assets;

            RNQRGenerator.detect({
              base64,
            })
              .then((response) => {
                const { values } = response;
                if (isValidUUID(values[0])) {
                  handlebarCodeData(values[0]);
                }
              })
              .catch((error) =>
                console.log('Cannot detect QR code in image', error),
              );
          }
          ToastAndroid.show('QR Code read successfully', ToastAndroid.SHORT);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={saveQrToDisk}>
          <AntDesign name="download" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.codeContainer}>
          <QRCode
            size={230}
            value={userId}
            logo={Logo}
            color={Colors.primary}
            getRef={(c) => (ref.current = c)}
            quietZone={10}
          />
        </View>
        <Text style={styles.userName}>
          {firstName} {lastName}
        </Text>
      </View>

      <View style={styles.fullWidthView}>
        <TouchableOpacity style={styles.textWithIcon} onPress={readFromImage}>
          <Entypo name="image" color="white" size={20} />
          <Text
            style={[styles.whiteText, styles.largeText, styles.textWithMargin]}>
            Read QR code from a photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.textWithIcon}
          onPress={() => setIsScanning(true)}>
          <Entypo name="camera" color="white" size={20} />
          <Text
            style={[styles.whiteText, styles.largeText, styles.textWithMargin]}>
            Scan QR Code
          </Text>
        </TouchableOpacity>
      </View>
      {isTransferModalVisible && (
        <SendMoney
          closeModal={() => setIsTransferModalVisible(false)}
          getLatestWallet={getLatestWallet}
          receiver={receiver}
        />
      )}
      {isScanning && (
        <Scan
          handlebarCodeData={handlebarCodeData}
          stopScanning={() => setIsScanning(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
  },
  header: {
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  codeContainer: {
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  textWithIcon: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  whiteText: {
    color: 'white',
  },
  largeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullWidthView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  textWithMargin: {
    marginLeft: 10,
  },
});

export default QRCodeScan;
