import React, { Component } from 'react';
import { View } from 'react-native';

import { css } from '../css';

export class Footer extends Component {
	render() {
		let foter_css= [css.footer];
		if(this.props.empty) foter_css.push(css.footer_empty);
		
    return (
      <View style={foter_css}>
        {this.props.children}
      </View>
    );
  }
}

export default Footer;
