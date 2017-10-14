import React from 'react';
import { Text } from 'react-native';

import { css } from '../css';

export const TabBarLabel = (props) => {
	return (
		<Text {...props} style={[css.tab_bar_label, {color: props.tintColor}]}>{props.children}</Text>
	);
}