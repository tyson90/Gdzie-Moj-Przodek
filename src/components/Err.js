import React from 'react';
import { Text } from './Text';

import { css } from '../css';

export const Err = (props) => (
	<Text style={[css.text_error, props.style]}>
		{props.children}
	</Text>
)
