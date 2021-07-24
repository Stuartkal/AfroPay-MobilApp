import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerItems } from 'react-navigation';

export const CustomDrawerNavigator = (props) => (
  <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={'black'}
      activeTintColor={'white'}
      iconContainerStyle={styles.icons}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icons: {
    width: 30,
  },
});
