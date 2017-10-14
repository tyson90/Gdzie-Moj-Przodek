import React from 'react';
import { Text as Txt } from 'react-native';

import { css } from '../css';

export const Text = (props) => (
	<Txt style={[css.txt, props.style]}>
		{props.children}
	</Txt>
)
