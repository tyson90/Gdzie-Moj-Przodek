import React, { Component, Children, cloneElement } from 'react';
import { View } from 'react-native';
import { Text } from './Text';

import { css } from '../css';

export class Header extends Component {
	render() {
		let childrenWithProps = Children.map(this.props.children,
     (child) => cloneElement(child, {
       style: [child.props.style, css.header_text]
     })
    );
    
    const extra_css = this.props.notop ? css.header_no_header : null;
    
    if (!childrenWithProps || !childrenWithProps.length && this.props.title) {
      childrenWithProps = (
        <Text style={css.header_text}>{this.props.title}</Text>
      )
    }
    
    return (
      <View style={[css.header, extra_css, this.props.style]}>
        {childrenWithProps}
      </View>
    );
  }
}

export default Header;
