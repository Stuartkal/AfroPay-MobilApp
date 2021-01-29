import React from 'react';
import {enableScreens} from 'react-native-screens'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/components/Store/Reducers'

import Navigation from './src/components/Navigation/Navigation'
import Splash from './src/components/Screens/SplashScreen/Splash'

console.disableYellowBox = true;

enableScreens()

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
	return (
		<Provider store={store}>
			<Navigation/>
		</Provider>
	);
};

export default App;
