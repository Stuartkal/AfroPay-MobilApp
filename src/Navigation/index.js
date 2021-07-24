import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppTabNavigation, Authentication } from './Navigation';

const Index = () => {
  const auth = useSelector((state) => state.auth.authenticated);

  return (
    <NavigationContainer>
      {!auth && <Authentication />}
      {auth && <AppTabNavigation />}
    </NavigationContainer>
  );
};

export default Index;
