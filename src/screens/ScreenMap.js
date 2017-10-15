import React, { Component } from 'react';
import { ComponentForScreen } from '../components/ComponentForScreen';
import { connect } from 'react-redux';
import {
	View,
	Keyboard,
	Linking,
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

import {
	DrawerLabel,
	ScreenView,
	Grid,
	Item,
	Text,
	Button,
	Input,
	GroveForm,
	GroveCollout,
} from '../components';

import MapView from 'react-native-maps';

import { Logger } from '../Helper';
import { _ } from '../i18n';
import { css, colors } from '../css';
import { markers, getMarkerIcon, zooms } from '../Data';
import { mapZoomIn } from '../actions';

class Screen extends ComponentForScreen {
	constructor(...args) {
		super(...args);
		// Logger.dumpLog(this.props);
		
		this.base_delta = {
			lat: 0.1,
			lng: 0.1,
		}
		
		this.state = this.getInitialState();
	}
  
  mergeState(newState={}, callback=()=>{}) {
  	this.setState(prevSate => {
  		return Object.assign(prevSate, newState);
  	}, () => {callback()});
  }
  
  getInitialState() {
	  return {
	    region: {
	      latitude: 52.2297700,
	      longitude: 21.0117800,
        latitudeDelta: this.base_delta.lat * zooms.out,
	      longitudeDelta: this.base_delta.lng * zooms.out,
	    },
	    initial: true,
	    submitting: false,
	  };
	}
	
	static navigationOptions = {
    drawerLabel: (<DrawerLabel title={'menu.mapa'} route={'ds.mapa'} />),
  }
  
  componentDidMount() {
  	this.mergeState(this.getInitialState(), () => {
  		navigator.geolocation.getCurrentPosition(pos => {
	  		Logger.log('Success get position');
	  		Logger.dumpLog(pos);
	  		this.updatePos({
	  			latitude: pos.coords.latitude,
	  			longitude: pos.coords.longitude,
	  		});
	  	}, err => {
	  		Logger.log('Error get position');
	  		Logger.dumpLog(err);
	  	});
  	});
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  // 	let should = true;
  // // 	Logger.dumpLog(this.props);
  	
  // 	return should;
  // }

	onRegionChange(region) {
		// Logger.dumpLog(region);
	  this.mergeState({
			retion: region
		});
	}
	
	showCementary(pos) {
		this.updatePos(pos.nativeEvent.coordinate, () => { this.props.showCementary() });
	}
	
	updatePos(pos, callback=()=>{}) {
		this.mergeState({
			region: {
				latitude: pos.latitude,
				longitude: pos.longitude,
        latitudeDelta: this.base_delta.lat * this.props.zoom,
	      longitudeDelta: this.base_delta.lng * this.props.zoom,
			},
			initial: false,
		}, callback);
	}
	
	navigateToGrove(marker) {
		Logger.log('Navigate...');
		// Logger.dumpLog(marker);
		Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=walking&dir_action=navigate&destination=${marker.latlng.latitude},${marker.latlng.longitude}`);
	}
	
	renderMarker(marker, i) {
		return (marker.type != 'cementary') && this.props.zoom == zooms.out ? null : (
			<MapView.Marker
			  coordinate={marker.latlng}
			  title={marker.title}
			  description={marker.description}
			  image={getMarkerIcon(marker.type)}
			  key={i}
			  onPress={(pos) => { this.showCementary(pos) }}
			>
			  <MapView.Callout
			  	tooltip={false}
			  	onPress={() => this.navigateToGrove(marker)}
			  >
			    <GroveCollout {...marker} />
			  </MapView.Callout>
			</MapView.Marker>
		)
	}
  
  render() {
  	let region = Object.assign({}, this.state.region);
  	if (this.state.initial) region.latitudeDelta = this.base_delta.lat * this.props.zoom;
    if (this.state.initial) region.longitudeDelta = this.base_delta.lng * this.props.zoom;
  	
		return (
			<ScreenView>
				<View style={css.map.wrapper}>
					<MapView style={[css.map.wrapper, css.map.inner]}
			      region={region}
			      onRegionChangeComplete={(region) => { this.onRegionChange(region) }}
			      mapType={this.props.zoom == zooms.in ? 'hybrid' : 'standard'}
			    >
			    	{markers.map((marker, i) => (
						    this.renderMarker(marker, i)
						  ))}
		    	</MapView>
			  </View>
			  <GroveForm />
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

export const ScreenMap = connect(mapStateToProps, mapDispatchToProps)(Screen);
