import React from "react";
import { useDispatch } from 'react-redux'
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { DrawerItems } from 'react-navigation-drawer'

const Logout = (props) => {

    const logout = () => {
        props.navigation.navigate({ routeName: 'Auth' })
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
                <TouchableOpacity onPress={logout} style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff' }}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Logout
