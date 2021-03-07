import React from "react";
import { useDispatch } from 'react-redux'
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { DrawerItemList } from '@react-navigation/drawer'
import * as actionCreators from '../store/ActionCreators'

const Logout = (props) => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(actionCreators.logout())
        props.navigation.navigate({ routeName: 'Auth' })
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItemList {...props} />
                <TouchableOpacity onPress={logout} style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#fff' }}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Logout
