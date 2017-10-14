import React, { Component } from 'react';
import { ComponentForScreen } from '../components/ComponentForScreen';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { DeviceInfo } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
import {
	DrawerLabel,
	ScreenView,
	Grid,
	Item,
	Text,
	Err,
} from '../components';

import MapView from 'react-native-maps';

import { _ } from '../i18n';
import { css } from '../css';

class Screen extends ComponentForScreen {
	constructor(...args) {
		super(...args);
		
		this.state = this.getInitialState();
	}
	
	static navigationOptions = {
    drawerLabel: (<DrawerLabel title={'menu.mapa'} route={'ds.mapa'} />),
  }
  
  getInitialState() {
	  return {
	    region: {
	      latitude: 52.2297700,
	      longitude: 21.0117800,
        latitudeDelta: 0.0922 *5,
	      longitudeDelta: 0.0421 *5,
	    },
	  };
	}

	onRegionChange(region) {
	  this.setState({ region });
	}

  
  render() {
		return (
			<ScreenView>
				<View style={css.map.wrapper}>
					<MapView style={[css.map.wrapper, css.map.inner]}
			      region={this.state.region}
			      onRegionChange={(region) => { this.onRegionChange(region) }}
			    />
			  </View>
			</ScreenView>
		);
	}
}

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action()),
});

export const ScreenAppInfo = connect(null, mapDispatchToProps)(Screen);
