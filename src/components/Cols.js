import React, { Children } from 'react';
import { View } from 'react-native';
import { Text } from './Text';

import { css } from '../css';

export const Cols = (props) => (
	<View style={css.columns}>
		{
			Children.map(props.children, (child, i) => (
				<View style={[child.props.style, css.column, {flex: props.grid[i]}]}>{child}</View>
			))
		}
	</View>
)
