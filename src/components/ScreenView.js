import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';

import { css } from '../css';

export const ScreenView = (props) => {
	return (
	  <View style={css.view}>
	    <View style={css.content_wrapper}>
	      {props.children}
	    </View>
	  </View>
	);
}
