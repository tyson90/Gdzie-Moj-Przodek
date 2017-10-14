import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';

import { navigateToPage } from '../../actions';

import { colors, css, em } from '../../css';

class NavBtn extends Component {
	render() {
		return (
			<Button
				title={this.props.title}
				onPress={this.props.navigateTo}
				color={colors.primary}
				style={css.btn}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	navigateTo: () => dispatch(navigateToPage(ownProps.page))
});

export const NavButton = connect(
  null,
  mapDispatchToProps
)(NavBtn);
