import React from 'react';
import { Text } from 'react-native';
import { TabBarLabel } from '../components';
import Icon from 'react-native-vector-icons/Ionicons';

import { css, colors } from '../css';

export const IconHome = ({ tintColor }) => (
	<Icon name='ios-home-outline' type='ios-home' color={tintColor} size={32} style={{marginTop: 3}} />
);

export const Icon2 = ({ tintColor }) => (
	<Icon name='ios-time-outline' type='ios-time' color={tintColor} size={32} style={{marginTop: 3}} />
);

export const Icon3 = ({ tintColor }) => (
	<Text color={tintColor} style={[css.tab_bar_icon_text, { color: tintColor, borderColor: tintColor }]}>7</Text>
);

export const Icon4 = ({ tintColor }) => (
	<Icon name='ios-calendar-outline' type='ios-calendar' color={tintColor} size={30} />
);

export const IconMenu = ({ tintColor }) => (
	<Icon name='ios-list-outline' type='ios-more' color={colors.semi_dark} size={40} />
);

export const MenuLabel = ({ tintColor, focused }) => (
	<TabBarLabel tintColor={colors.semi_dark} focused={false}>Menu</TabBarLabel>
);