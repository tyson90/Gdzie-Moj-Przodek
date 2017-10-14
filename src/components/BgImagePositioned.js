import React, { Component } from 'react';
import {
	Image,
	Animated,
	View,
} from 'react-native';

import { css } from '../css';

export class BgImagePositioned extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		let should = true;
		// console.log('should BgImagePositioned update ?');
		// console.log(nextProps.style);
		
		return should;
	}
	
	render() {
		return (
		  <View style={css.bg_animated.wrapper}>
		  	<Animated.View style={[css.bg_animated.img_wrapper, this.props.style]}>
				  <Image style={[css.background, css.bg_animated.img]} source={this.props.src} />
			  </Animated.View>
			  
			  <View style={css.bg_animated.content}>
				  {this.props.children}
			  </View>
			</View>
		)
	}
}
