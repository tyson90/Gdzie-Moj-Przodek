import { NavigationActions } from 'react-navigation';
import {
	NAVIGATE_TO_ROUTE,
	NAVIGATE_BACK,
} from '../actions/actionTypes';

import { NavApp } from '../App';

import { Logger } from '../Helper';

const defaultNavState = NavApp.router.getStateForAction('Home');

export function nav(state=defaultNavState, action) {
	let nextState;
	
	switch(action.type) {
		case NAVIGATE_TO_ROUTE:
			switch(action.routeName) {
				default:
					nextState = NavApp.router.getStateForAction(
						NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
						state
					);
					break;
					
				case 'Menu':
					console.log('MENU')
					nextState = NavApp.router.getStateForAction(
						NavigationActions.navigate({ routeName: 'DrawerOpen' }),
						state
					);
					break;
			}
			break;
			
		case NAVIGATE_BACK:
			console.log('go BACK');
			if (!action.key) {
				nextState = NavApp.router.getStateForAction(
					NavigationActions.back({ key: 'More' }),
					state
				);
			}
			break;
	}
	
	return nextState || state;
}