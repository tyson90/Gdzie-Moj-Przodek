import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Popup } from './Popup';
import { Text } from './Text';

import { colors } from '../css';

export class Loading extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.loading != this.props.loading;
	}
	
  render() {
  	if (!this.props.loading) return null;
  	// console.log(this.props.loading, ' << loading');
  	
    return (
      <Popup style={[{ backgroundColor: 'transparent' }]}>
        <ActivityIndicator size={'large'} color={colors.secondary} />
        <Text style={{color: colors.secondary}}>{'Loading...'}</Text>
      </Popup>
    );
  }
}
