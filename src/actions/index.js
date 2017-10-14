import {
	NAVIGATE_TO_ROUTE,
	
	APP_LOADING_START,
	APP_LOADING_END,
	SET_LANGUAGE,
	TOGGLE_MENU,
	SET_LAST_SCREEN_NAME,
	
	ZOOM_IN,
	ZOOM_OUT,
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

export function toggleMenuOpener() {
	return {
		type: TOGGLE_MENU
	}
}

export function setLastScreenName(name) {
	return {
		type: SET_LAST_SCREEN_NAME,
		name
	}
}

export function mapZoomIn() {
	return {
		type: ZOOM_IN,
	}
}

export function mapZoomOut() {
	return {
		type: ZOOM_OUT,
	}
}

