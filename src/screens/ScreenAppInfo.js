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

import { _ } from '../i18n';

class Screen extends ComponentForScreen {
	static navigationOptions = {
    drawerLabel: (<DrawerLabel title={'menu.app_info'} route={'ds.app_info'} />),
  }
  
  render() {
  	console.log((DeviceInfo));
		return (
			<ScreenView>
				<Grid w={1}>
					<View>
						<View><Text>{_('appinfo.version')}</Text></View>
						<View><Text>{'0.0.0 (000)'}</Text></View>
						<View><Text>{DeviceInfo.Version}</Text></View>
					</View>
				
					<View>
						<View><Text>{_('appinfo.author')}</Text></View>
						<View><Text>{'---'}</Text></View>
					</View>
				
					<View>
						<View><Err>{'There is an error'}</Err></View>
					</View>
				</Grid>
			</ScreenView>
		);
	}
}

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action()),
});

export const ScreenAppInfo = connect(null, mapDispatchToProps)(Screen);
