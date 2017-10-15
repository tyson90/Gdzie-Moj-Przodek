import React from 'react';
import { connect } from 'react-redux';
import { AnimatedScreen } from './AnimatedScreen';
import {
	DrawerLabel,
} from '../components';

import { _ } from '../i18n';

class Screen extends AnimatedScreen {
	constructor(...args) {
		super(...args);
		
		this.buttons[0].title = _('');
		this.buttons[1].title = _('');
		
		this.extra_button.url = 'ds.mapa';
		this.extra_button.title = _('btn.Wybierz_Cmentarz');
		this.extra_button.static = true;
	}
	
	static navigationOptions = {
    drawerLabel: (<DrawerLabel title={'menu.home'} route={'ds.home'} />),
  }
  
  afterButtonPressed(num) {
  	console.log(`Pressed button number ${num}`);
  	this.props.start(num);
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action()),
});

export const ScreenHome = connect(null, mapDispatchToProps)(Screen);
