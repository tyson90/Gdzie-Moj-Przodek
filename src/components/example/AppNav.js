import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavButton } from './NavButton';

import { colors, css, em } from '../../css';

export class AppNav extends Component {
	render() {
		return (
			<View>
				<NavButton title='Zakładka #1' page='tab-1' />
				<NavButton title='Zakładka #2' page='tab-2' />
				<NavButton title='Zakładka #3' page='tab-3' />
			</View>
		);
	}
}
