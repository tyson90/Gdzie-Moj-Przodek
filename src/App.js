import React from 'react';
import {
	DrawerNavigator,
	addNavigationHelpers
} from 'react-navigation';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { View } from 'react-native';
import { Loading } from './components/Loading';
import { MenuOpener } from './components/MenuOpener';
import { css } from './css';

import {
	registerDrawerScreens,
	registerDrawerOptions
} from './screens/config';

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

const drawerScreens = registerDrawerScreens();
const drawerOptions = registerDrawerOptions();

let DrawerScreens = [];
for(k in drawerScreens) {
	DrawerScreens[k] = drawerScreens[k];
}

export const NavApp = DrawerNavigator(DrawerScreens, drawerOptions);

const ReduxApp = ({dispatch, nav, app}) => {
	return (
	  <View style={css.body}>
	  	<Loading loading={false/*app.loading*/} />
			<NavApp navigation={addNavigationHelpers({dispatch, state: nav})} />
			<MenuOpener navigation={addNavigationHelpers({dispatch, state: nav})} />
		</View>
	);
}

// ReduxApp.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

const mapStateToProps = state => {
	return {
		nav: state.nav,
		app: state.app,
	}
}

let App = connect(
	mapStateToProps
)(ReduxApp);

export default App;
