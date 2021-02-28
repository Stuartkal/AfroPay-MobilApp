
import React from 'react'
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Auth from '../Screens/Auth/Auth'
import Register from '../Screens/Auth/Register'
import Home from '../Screens/Home/Home'
import Payments from '../Screens/Payments/Payments'
import Receipts from '../Screens/Receipts/Receipts'
import ConfirmPayments from '../Screens/Confirm/ConfirmPayment'
import QRCodeScan from '../Screens/QRCode/QRCodeScan'
import Profile from '../Screens/SideDrawer/Profile'
import Help from '../Screens/SideDrawer/Help'
import Settings from '../Screens/SideDrawer/Settings'
import Logout from './Logout'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

import Color from '../constants/Color'
import Styles from './Styles'

const Navigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'AfroPay',
        }
    },
    Payments: {
        screen: Payments,
        navigationOptions: {
            headerTitle: 'Payments',
        }
    },
    Transactions: {
        screen: Receipts,
        navigationOptions: {
            headerTitle: 'Transactions',
        }
    },
    ConfirmPayments: {
        screen: ConfirmPayments,
        navigationOptions: {
            headerTitle: 'Confirm Payments',
        }
    },
    QRCodeScan: {
        screen: QRCodeScan,
        navigationOptions: {
            headerTitle: 'QR Code Scan',
        }
    }
},
    {
        defaultNavigationOptions: {
            headerTintColor: '#0a4776'

        }
    }
)

const transactStack = createStackNavigator({
    Transactions: {
        screen: Payments,
        navigationOptions: {
            headerTitle: 'Transactions',
        }
    }
})

const QRCodeStack = createStackNavigator({
    QRCode: {
        screen: QRCodeScan,
        navigationOptions: {
            headerTitle: 'QR Code Scan',
            headerTintColor: '#0a4776'
        }
    }
})

const tabNavigator = createBottomTabNavigator({
    Home: {
        screen: Navigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <SimpleLineIcons name="home" size={20} color={tabInfo.tintColor} />
            }
        }
    },
    ScanQRCode: {
        screen: QRCodeStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <View style={Styles.iconContainer}>
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#fff" />
                    </View>
                )
            }
        }
    },
    Transactions: {
        screen: transactStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name="history" size={24} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Color.primary,
        labelStyle: {
            fontSize: 15
        }
    }
})


const sideDrawer = createDrawerNavigator({
    AfroPay: {
        screen: tabNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            drawerIcon: (tabInfo) => {
                return <FontAwesome name="user-o" size={24} color={'#fff'} />
            },
            drawerLabel: 'Profile',
        }
    },
    Help: {
        screen: Help,
        navigationOptions: {
            drawerIcon: (tabInfo) => {
                return <Feather name="help-circle" size={24} color={'#fff'} />
            },
            drawerLabel: 'Help'
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            drawerIcon: (tabInfo) => {
                return <Feather name="settings" size={24} color={'#fff'} />
            },
            drawerLabel: 'Settings'
        }
    }
}, {
    drawerBackgroundColor: Color.primary,
    contentOptions: {
        activeTintColor: Color.secondary,
        labelStyle: {
            color: '#fff',
        }
    },
    contentComponent: props => {
        return <Logout {...props} />
    }
})

const authNavigator = createSwitchNavigator({
    Auth: Auth,
    Register: Register,
    Home: sideDrawer
})

export default createAppContainer(authNavigator)