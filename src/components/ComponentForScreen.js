import React, { Component } from 'react';

import { appLoadingStart, appLoadingEnd } from '../actions';

export class ComponentForScreen extends Component {
	componentWillUpdate() {
		// this.props.dispatch(appLoadingStart);
	}
	componentWillMount() {
		// this.props.dispatch(appLoadingStart);
	}
	
	componentDidUpdate() {
		// this.props.dispatch(appLoadingEnd);
	}
	componentDidMount() {
		// this.props.dispatch(appLoadingEnd);
	}
}
