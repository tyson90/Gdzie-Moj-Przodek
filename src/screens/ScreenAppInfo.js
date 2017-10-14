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

import { Logger } from '../Helper';
import { _ } from '../i18n';
import { css } from '../css';
import { markers, getMarkerIcon, zooms } from '../Data';
import { mapZoomIn } from '../actions';

class Screen extends ComponentForScreen {
	constructor(...args) {
		super(...args);
		
		this.base_delta = {
			lat: 0.0922,
			lng: 0.0421,
		}
		
		this.state = this.getInitialState();
	}
	
	static navigationOptions = {
    drawerLabel: (<DrawerLabel title={'menu.mapa'} route={'ds.mapa'} />),
  }
  
  shouldComponentUpdate(nextProps, nextState) {
  	let should = true;
  	Logger.dumpLog(this.props);
  	
  	return should;
  }
  
  getInitialState() {
	  return {
	    region: {
	      latitude: 52.2297700,
	      longitude: 21.0117800,
        latitudeDelta: this.base_delta.lat * this.props.zoom,
	      longitudeDelta: this.base_delta.lng * this.props.zoom,
	    },
	  };
	}

	onRegionChange(region) {
		Logger.dumpLog(region);
	  this.setState({ region });
	}
	
	showCementary(pos) {
		Logger.dumpLog(pos.nativeEvent);
		this.setState({
			region: {
				latitude: pos.nativeEvent.coordinate.latitude,
				longitude: pos.nativeEvent.coordinate.longitude,
        latitudeDelta: this.base_delta.lat * this.props.zoom,
	      longitudeDelta: this.base_delta.lng * this.props.zoom,
			}
		}, () => { this.props.showCementary() })
	}
  
  render() {
		return (
			<ScreenView>
				<View style={css.map.wrapper}>
					<MapView style={[css.map.wrapper, css.map.inner]}
			      region={this.state.region}
			      onRegionChange={(region) => { this.onRegionChange(region) }}
			      mapType={this.props.zoom == zooms.in ? 'hybrid' : 'standard'}
			    >
			    	{markers.map((marker, i) => (
						    <MapView.Marker
						      coordinate={marker.latlng}
						      title={marker.title}
						      description={marker.description}
						      image={getMarkerIcon()}
						      key={i}
						      onPress={(pos) => { this.showCementary(pos) }}
						    />
						  ))}
			    	</MapView>
			  </View>
			</ScreenView>
		);
	}
}

const mapStateToProps = state => ({
	zoom: state.app.zoom,
});

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action()),
  showCementary: () => dispatch(mapZoomIn()),
});

export const ScreenAppInfo = connect(mapStateToProps, mapDispatchToProps)(Screen);
