import React, { Component } from 'react';
import { ScreenMap } from './ScreenMap';
import { connect } from 'react-redux';

import {
	DrawerLabel,
} from '../components';

import { markers } from '../Data';

class Screen extends ScreenMap {
	constructor(...args) {
		super(...args);
		
		
	}
	
	static navigationOptions = {
    drawerLabel: (<DrawerLabel style={{paddingLeft: 40, paddingVertical: 3}} title={markers[3].title} translated route={'ds.mapa2'} />),
  }
}

const mapStateToProps = state => ({
	zoom: state.app.zoom,
});

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action()),
  showCementary: () => dispatch(mapZoomIn()),
});

export const SG2 = connect(mapStateToProps, mapDispatchToProps)(Screen);
