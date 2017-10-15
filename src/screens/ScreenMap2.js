import React, { Component } from 'react';
import { ScreenMap } from './ScreenMap';
import { connect } from 'react-redux';

import {
	DrawerLabel,
} from '../components';

class Screen extends ScreenMap {
	constructor(...args) {
		super(...args);
		
		
	}
	
	static navigationOptions = {
    drawerLabel: (<DrawerLabel title={'menu.mapa2'} route={'ds.mapa2'} />),
  }
}

const mapStateToProps = state => ({
	zoom: state.app.zoom,
});

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action()),
  showCementary: () => dispatch(mapZoomIn()),
});

export const ScreenMap2 = connect(mapStateToProps, mapDispatchToProps)(Screen);
