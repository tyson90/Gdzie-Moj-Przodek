import {
	NAVIGATE_TO_ROUTE,
  SET_LANGUAGE,
  TOGGLE_MENU,
  
  ZOOM_IN,
  ZOOM_OUT,
} from '../actions/actionTypes';

import {
	navigateToPage,
  toggleMenuOpener,
  setLastScreenName,
  
  mapZoomIn,
  mapZoomOut,
} from '../actions';

import {
	Logger,
} from '../Helper';
import { setLocale } from '../i18n';
import { zooms } from '../Data';

const appMiddleware = store => next => action => {
  // Logger.log("Middleware triggered:", action.type);
  
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
      // Logger.dumpLog(action);
      store.dispatch(setLastScreenName(action.routeName));
      store.dispatch(toggleMenuOpener());
      break;
      
    // case ZOOM_IN:
    //   Logger.log(prevState.app.zoom, zooms.in)
    //   if (prevState.app.zoom != zooms.in) {
    //     Logger.log('bede zoomowal');
    //     setTimeout(() => {
    //       store.dispatch(mapZoomIn(false));
    //     }, 0);
    //   }
    //   break;
      
    // case ZOOM_OUT:
    //   if (prevState.app.zoom != zooms.out) mapZoomOut();
    //   break;
  }
}

export default appMiddleware;
