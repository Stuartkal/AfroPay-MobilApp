import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import Auth from '../Screens/Auth/Auth'
import Register from '../Screens/Auth/Register'
import Home, { screenOptions as homeOptions } from '../Screens/Home/Home'
import Payments from '../Screens/Payments/Payments'
import QRCode from '../Screens/QRCode/QRCodeScan'
import confirmPayment from '../Screens/Confirm/ConfirmPayment'
import Help from '../Screens/SideDrawer/Help'
import Settings from '../Screens/SideDrawer/Settings'
import Profile from '../Screens/SideDrawer/Profile'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import Color from '../constants/Color'
import Styles from './Styles'

const StackNavigation = createStackNavigator()

export const AppNavigation = () => {

    const defaultOptions = {
        headerTitleStyle: {
            fontSize: 25
        },
        headerTintColor: Color.primary,
    }

    return (
        <StackNavigation.Navigator screenOptions={defaultOptions}>
            <StackNavigation.Screen name="AfroPay" component={Home} options={homeOptions} />
            <StackNavigation.Screen name="Payments" component={Payments} />
            <StackNavigation.Screen name="confirmPayment" component={confirmPayment} />
            <StackNavigation.Screen name="QRCode" component={QRCode} />
        </StackNavigation.Navigator>
    )
}


const Payment = () => {
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen name="Payments" component={Payments} />
        </StackNavigation.Navigator>
    )
}

const QRCodeScan = () => {
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen name="QRCode" component={QRCode} />
        </StackNavigation.Navigator>
    )
}

const TabNavigation = createBottomTabNavigator()


export const AppTabNavigation = () => {

    return <TabNavigation.Navigator tabBarOptions={{ activeTintColor: Color.primary }} >
        <TabNavigation.Screen name="Home" component={AppNavigation} options={{
            tabBarIcon: props => {
                return <SimpleLineIcons name="home" size={20} color={props.color} />
            }
        }} />
        <TabNavigation.Screen name="QRCode" component={QRCodeScan} options={{
            tabBarIcon: props => {
                return (
                    <View style={Styles.iconContainer}>
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#fff" />
                    </View>
                )
            }
        }} />
        <TabNavigation.Screen name="Receipts" component={Payment} options={{
            tabBarIcon: props => {
                return <MaterialCommunityIcons name="history" size={20} color={props.color} />
            }
        }} />
    </TabNavigation.Navigator>
}

export const Authentication = () => {
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen name="Login" component={Auth} options={{ headerShown: false }} />
            <StackNavigation.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <StackNavigation.Screen name="Home" component={AppTabNavigation} />
        </StackNavigation.Navigator>
    )
}

// const DrawerNavigator = createDrawerNavigator()

// export const DrawerScreens = () => {
//     return (
//         <DrawerNavigator.Navigator>
//             <DrawerNavigator.Screen name="Home" component={AppTabNavigation} />
//         </DrawerNavigator.Navigator>
//     )
// }

