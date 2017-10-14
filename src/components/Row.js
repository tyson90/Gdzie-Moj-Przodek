import React from 'react';
import { View } from 'react-native';

import { css } from '../css';

export const Row = (props) => (
	<View>
		<View style={css.row}>
			{props.children}
		</View>
	</View>
)
