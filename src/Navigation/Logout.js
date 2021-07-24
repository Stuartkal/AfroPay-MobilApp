/* eslint-disable react-native/no-inline-styles */
import { DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/ActionCreators';

const Logout = (props) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(actionCreators.logout());
    props.navigation.navigate({ routeName: 'Auth' });
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItemList {...props} />
        <TouchableOpacity
          onPress={logout}
          style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#fff' }}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Logout;
