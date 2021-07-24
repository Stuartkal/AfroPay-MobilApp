import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import Navigation from './src/Navigation';
import rootReducer from './src/store/Reducers';

enableScreens();

const reducerPersistor = persistReducer(
  {key: 'root', storage: AsyncStorage},
  rootReducer,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerPersistor,
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
