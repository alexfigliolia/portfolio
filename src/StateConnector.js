import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import Reducer from './Reducers';

const Store = createStore(Reducer, applyMiddleware(thunk));

export default () => (
	<Provider store={Store}>
		<App />
	</Provider>
);