import React, { useEffect } from 'react';
import { Image, StatusBar, View } from 'react-native';
import logo from '../../assets/images/splash.png';
import Styles from './Styles';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 3000);
  }, [props.navigation]);

  return (
    <View style={Styles.splashscreenContainer}>
      <Image style={Styles.logo} source={logo} />
      <StatusBar hidden />
    </View>
  );
};

export default SplashScreen;
