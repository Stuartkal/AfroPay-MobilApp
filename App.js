import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/Navigation';
import {store} from './src/store';

enableScreens();

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
