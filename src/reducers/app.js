import {
	APP_LOADING_START,
	APP_LOADING_END,
	SET_LANGUAGE,
	TOGGLE_MENU,
	SET_LAST_SCREEN_NAME,
} from '../actions/actionTypes';

import { Logger } from '../Helper';

const menuRoutes = [
	'Menu',
	'DrawerOpen',
]

const defaultState = {
	loading: false,
	lang: 'en',
	menu_is_opened: false,
	last_screen_name: null,
}

export function app(state=defaultState, action) {
	let nextState;
	
	switch(action.type) {
		default: break;
		
		case APP_LOADING_START:
		case APP_LOADING_END:
			nextState = Object.assign({}, state, {
				loading: action.loading
			});
			break;
			
		case SET_LANGUAGE:
			nextState = Object.assign({}, state, {
				lang: action.lang
			});
			break;
			
		case TOGGLE_MENU:
			Logger.log(state.last_screen_name, menuRoutes.indexOf(state.last_screen_name) > -1);
			nextState = Object.assign({}, state, {
				menu_is_opened: menuRoutes.indexOf(state.last_screen_name) > -1
			});
			break;
			
		case SET_LAST_SCREEN_NAME:
			nextState = Object.assign({}, state, {
				last_screen_name: action.name
			});
			break;
	}
	
	return nextState || state;
}