import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAuthToken } from '../store/ActionCreators/auth';
import { AppTabNavigation, Authentication } from './Navigation';

const mapState = ({ loggedIn }) => ({ loggedIn });

const connector = connect(mapState);

const Index = (props) => {
  const { loggedIn } = props;

  useState(() => {
    props.dispatch(getAuthToken());
  }, []);

  return (
    <NavigationContainer>
      {!loggedIn && <Authentication />}
      {loggedIn && <AppTabNavigation />}
    </NavigationContainer>
  );
};

export default connector(Index);
