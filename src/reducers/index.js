import { combineReducers } from 'redux';

import { app } from './app';
import { nav } from './navigation';

const appReducer = combineReducers({
	app,
	nav,
});

export default appReducer;
