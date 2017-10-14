import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../Text';
import { connect } from 'react-redux';

import { css } from '../../css';

class Welcome extends Component {
	render() {
		return (
			<View style={{flex: 0}}>
				<Text>{'Witaj '}{this.props.name}{'!'}</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	name: state.name
});

export const Witaj = connect(
  mapStateToProps
)(Welcome);

