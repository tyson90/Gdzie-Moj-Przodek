import React, { Component } from 'react';
import { Keyboard, View } from 'react-native';
import { Button } from './Button';
import { Text } from './Text';

import { css } from '../css';
import { Logger } from '../Helper';

export class GroveCollout extends Component {
	constructor(...args) {
		super(...args);
		
		
	}
  
  mergeState(newState={}, callback=()=>{}) {
  	this.setState(prevSate => {
  		return Object.assign(prevSate, newState);
  	}, () => { callback() });
  }
	
	navigateToGrove() {
		Logger.log('Navigate...');
		Logger.dumpLog(this.props);
	}
	
	render() {
		let desc = !this.props.description ? null : (<Text style={[css.callout.label, css.callout.desc]}>{this.props.description}</Text>);
		
		return (
      <View style={css.callout.wrapper}>
      	<Text style={css.callout.label}>{this.props.title}</Text>
      	{desc}
				<Button
	        title={'Nawiguj'}
	        onPress={() => this.navigateToGrove()}
	        style={[css.btn_home, css.btn_home2, css.callout.btn]}
	        textStyle={css.callout.btn_txt}
	        // containerViewStyle={css.callout.btn}
	      />
		  </View>
		)
	}
}


