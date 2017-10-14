import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';

import { css } from '../css';

export const Popup = (props) => (
	<View style={[css.popup, props.style]}>
		{props.children}
	</View>
)
