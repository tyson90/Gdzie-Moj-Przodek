import React from 'react';
import { View } from 'react-native';

import { css } from '../css';

export const Col = (props) => (
	<View>
		<View style={css.col}>
			{props.children}
		</View>
	</View>
)
