import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducerPersistor = persistReducer(
  { key: 'root', storage: AsyncStorage },
  rootReducer,
);

export const store = createStore(
  reducerPersistor,
  composeEnhancers(applyMiddleware(thunk)),
);
