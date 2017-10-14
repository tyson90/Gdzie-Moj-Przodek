import {
	APP_LOADING_START,
	APP_LOADING_END,
	SET_LANGUAGE,
} from '../actions/actionTypes';

const defaultState = {
	loading: false,
	lang: 'en',
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
	}
	
	return nextState || state;
}