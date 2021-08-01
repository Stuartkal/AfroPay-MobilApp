import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Color from '../constants/Color';
import Auth from '../Screens/Auth/Auth';
import Register from '../Screens/Auth/Register';
import Home, { screenOptions as homeOptions } from '../Screens/Home/Home';
import Payments, {
  screenOptions as paymentOptions,
} from '../Screens/Payments/Payments';
import Profile from '../Screens/Profile/Profile';
import QRCode from '../Screens/QRCode/QRCode';
import SplashScreen from './SplashScreen';
import Styles from './Styles';
import Details from '../Screens/Payments/Details';

const StackNavigation = createStackNavigator();

export const AppNavigation = () => {
  const defaultOptions = {
    headerTitleStyle: {
      fontSize: 25,
    },
    headerTintColor: Color.primary,
  };

  return (
    <StackNavigation.Navigator screenOptions={defaultOptions}>
      <StackNavigation.Screen
        name="AfroPay"
        component={Home}
        options={homeOptions}
      />
      <StackNavigation.Screen name="Payments" component={Payments} />
      <StackNavigation.Screen name="QRCode" component={QRCode} />
      <StackNavigation.Screen name="Profile" component={Profile} />
      <StackNavigation.Screen
        name="Login"
        component={Auth}
        options={{ headerShown: false }}
      />
    </StackNavigation.Navigator>
  );
};

const Payment = () => {
  const defaultOptions = {
    headerTitleStyle: {
      fontSize: 25,
    },
    headerTintColor: Color.primary,
  };
  return (
    <StackNavigation.Navigator screenOptions={defaultOptions}>
      <StackNavigation.Screen
        name="History"
        component={Payments}
        options={paymentOptions}
      />
      <StackNavigation.Screen
        name="Details"
        component={Details}
        options={({ route }) => {
          return {
            ...paymentOptions,
            headerTitle: route.params.isPayment ? 'Payment' : 'Transfer',
          };
        }}
      />
    </StackNavigation.Navigator>
  );
};

const QRCodeScan = () => {
  const defaultOptions = {
    headerTitleStyle: {
      fontSize: 25,
    },
    headerTintColor: Color.primary,
  };
  return (
    <StackNavigation.Navigator screenOptions={defaultOptions}>
      <StackNavigation.Screen
        name="QRCode"
        component={QRCode}
        options={{ headerShown: false, headerTitle: 'Transfer funds' }}
      />
    </StackNavigation.Navigator>
  );
};

const TabNavigation = createBottomTabNavigator();

export const AppTabNavigation = () => {
  return (
    <TabNavigation.Navigator tabBarOptions={{ activeTintColor: Color.primary }}>
      <TabNavigation.Screen
        name="Home"
        component={AppNavigation}
        options={{
          tabBarIcon: (props) => {
            return (
              <SimpleLineIcons name="home" size={20} color={props.color} />
            );
          },
        }}
      />
      <TabNavigation.Screen
        name="QRCode"
        component={QRCodeScan}
        options={{
          tabBarIcon: (props) => {
            return (
              <View style={Styles.iconContainer}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={30}
                  color="#fff"
                />
              </View>
            );
          },
        }}
      />
      <TabNavigation.Screen
        name="Receipts"
        component={Payment}
        options={{
          tabBarIcon: (props) => {
            return (
              <MaterialCommunityIcons
                name="history"
                size={20}
                color={props.color}
              />
            );
          },
        }}
      />
    </TabNavigation.Navigator>
  );
};

export const Authentication = () => {
  return (
    <StackNavigation.Navigator screenOptions={{ animationEnabled: false }}>
      <StackNavigation.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <StackNavigation.Screen
        name="Login"
        component={Auth}
        options={{ headerShown: false }}
      />
      <StackNavigation.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <StackNavigation.Screen name="Home" component={AppTabNavigation} />
    </StackNavigation.Navigator>
  );
};
