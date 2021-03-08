import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './src/store/Reducers';
import {View, Text} from 'react-native';
import Auth from './src/Screens/Auth/Register';
import Navigation from './src/Navigation';

enableScreens();

const reducerPersisitor = persistReducer(
  {key: 'root', storage: AsyncStorage},
  rootReducer,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerPersisitor,
  composeEnhancers(applyMiddleware(thunk)),
);

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
