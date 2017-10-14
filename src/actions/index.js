import {
	NAVIGATE_TO_ROUTE,
	
	APP_LOADING_START,
	APP_LOADING_END,
	SET_LANGUAGE,
} from './actionTypes';

export function navigateToPage(page) {
	return {
		type: NAVIGATE_TO_ROUTE,
		routeName: page
	}
}

export function appLoadingStart() {
	return {
		type: APP_LOADING_START,
		loading: true
	}
}

export function setLang(lang) {
	return {
		type: SET_LANGUAGE,
		lang
	}
}

export function appLoadingEnd() {
	return {
		type: APP_LOADING_END,
		loading: false
	}
}

