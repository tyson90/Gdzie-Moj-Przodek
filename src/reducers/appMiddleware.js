import {
	NAVIGATE_TO_ROUTE,
  SET_LANGUAGE,
  TOGGLE_MENU,
} from '../actions/actionTypes';

import {
	navigateToPage,
  toggleMenuOpener,
  setLastScreenName,
} from '../actions';

import {
	Logger,
} from '../Helper';
import { setLocale } from '../i18n';

const appMiddleware = store => next => action => {
  Logger.log("Middleware triggered:", action.type);
  
  let prevState = store.getState(),
  		nextState = next(action);
  
  switch(action.type) {
  	default:
  			return nextState;
  		break;
      
    case SET_LANGUAGE:
      setLocale(action.lang);
      break;
      
    case NAVIGATE_TO_ROUTE:
      Logger.dumpLog(action);
      store.dispatch(setLastScreenName(action.routeName));
      store.dispatch(toggleMenuOpener());
      break;
  }
}

export default appMiddleware;
