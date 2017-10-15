import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
// import { PropTypes } from 'prop-types';
import { Text } from './Text';

import { css } from '../css';
import { _ } from '../i18n';

import { registerDrawerOptions } from '../screens/config';

export class Label extends Component {
	render() {
		let routes = this.props.nav.state.routes[0],
				active_route = routes.routes[routes.index],
				is_active = active_route.key == this.props.route,
				options = registerDrawerOptions().contentOptions;
		
		return (
			<Text style={[css.drawer_label, { color: is_active ? options.activeTintColor : options.inactiveTintColor }]}>
				{this.props.translated ? this.props.title : _(this.props.title)}
			</Text>
		);
  }
}

// Label.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	translated: PropTypes.bool,
// 	route: PropTypes.string.isRequired,
// }

Label.defaultProps = {
	translated: false,
}

const mapStateToProps = state => ({
	nav: addNavigationHelpers({state: state.nav}),
})

export const DrawerLabel = connect(mapStateToProps)(Label);
