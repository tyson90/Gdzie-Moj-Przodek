import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../Text';
import { Input } from '../Input';
import { connect } from 'react-redux';

import { AppNav } from './AppNav';
import { Witaj } from './Witaj';

import { setName } from '../../actions';

import { css, em } from '../../css';

class ScrA extends Component {
	render() {
		return (
			<View style={css.view}>
				<Witaj />
				<Text>Twoje imię</Text>
				<Input
					value={this.props.name}
					onChangeText={(val) => this.props.changeName(val)}
					returnKeyType='done'
					style={{
						height: em(2),
						lineHeight: em(2),
						borderWidth: 1
					}}
				/>
				<AppNav />
			</View>
		);
	}
}

const mapStateToProps = state => ({
	name: state.name
});

const mapDispatchToProps = dispatch => ({
	changeName: (name) => dispatch(setName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrA);
