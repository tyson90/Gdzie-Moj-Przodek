import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerItems } from '../../components/DrawerItems';
import { Drawer } from '../../components/Drawer';
import {
	ScreenHome,
	ScreenMap,
	ScreenMap2,
	
	SG1,
	SG2,
	SMG1,
} from '../';

import { css, colors } from '../../css';

export function registerDrawerScreens() {
	return {
		'ds.home': { screen: ScreenHome },
		'ds.mapa': { screen: ScreenMap, params: { graves: 'celebrities' } },
			'ds.g1': { screen: SG1 },
			'ds.g2': { screen: SG2 },
		'ds.mapa2': { screen: ScreenMap2, params: { graves: 'my' } },
			'ds.mg1': { screen: SMG1 },
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

