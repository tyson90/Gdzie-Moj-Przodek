import React from 'react';
import { View, TouchableOpacity as Touchable } from 'react-native';

import { css } from '../css';

export const MenuOpener = (props) => (
	<Touchable
		style={css.menu_opener}
		onPress={() => { props.navigation.navigate('Menu') }}
	>
		<View style={css.menu_opener_dot} />
		<View style={css.menu_opener_dot} />
		<View style={css.menu_opener_dot} />
	</Touchable>
)