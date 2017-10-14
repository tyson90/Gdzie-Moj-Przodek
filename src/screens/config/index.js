import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerItems } from '../../components/DrawerItems';
import { Drawer } from '../../components/Drawer';
import {
	ScreenHome,
	ScreenAppInfo,
} from '../';

import { css, colors } from '../../css';

export function registerDrawerScreens() {
	return {
		'ds.home': { screen: ScreenHome },
		'ds.mapa': { screen: ScreenAppInfo },
	}
}

export function registerDrawerOptions() {
	const { width, height } = Dimensions.get('window');
	let drawer_width = Math.round(Math.min(width *.66, height *.66, 250));
	
	return {
		drawerPosition: 'left',
		drawerWidth: drawer_width,
		contentComponent: props => <Drawer><DrawerItems {...props} /></Drawer>,
		contentOptions: {
			activeTintColor: colors.dark,
			inactiveTintColor: colors.semi_dark,
			activeBackgroundColor: colors.bg,
			style: css.drawer_item,
			labelStyle: css.drawer_item_txt,
		},
	}
}

