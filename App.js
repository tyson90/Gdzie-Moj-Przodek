import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Orientation } from 'react-native-orientation';
import { BackHandler } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Localization } from './src/i18n';

import App from './src/App';
import appReducer from './src/reducers';
import gameMiddleware from './src/reducers/appMiddleware';

import {
  navigateToPage,
  setLang,
} from './src/actions';

import { Logger } from './src/Helper';

let store = createStore(
  appReducer,
  applyMiddleware(gameMiddleware)
);

// store.dispatch(setLang(Localization.guesLang(DeviceInfo.getDeviceLocale()))); // after eject (should work ?)
// store.dispatch(setLang(Localization.guesLang('pl-PL')));

class Application extends Component {
  componentDidMount() {
    // Orientation.lockToPortrait(); // uncoment after eject AND SET UP
  }
  
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

BackHandler.addEventListener('hardwareBackPress', function() {
  // Logger.dumpLog(store.getState().nav.routes, 8);
  
  let index = store.getState().nav.routes[0].index;
  
  switch(index) {
    case 3:
      store.dispatch(navigateToPage('ds.settings'));
      return true;
  }
  if (index > 0) {
    store.dispatch(navigateToPage('ds.home'));
    return true;
  }
 
 return false;
});

export default Application;
