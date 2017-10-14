import React, { Component } from 'react';
import { DrawerItems as RNDrawerItems } from 'react-navigation';

import { Logger } from '../Helper';

export class DrawerItems extends Component {
  render() {
  	let props = Object.assign({}, this.props);
  	props.items = [];
  	
  	for (var i = 0; i < this.props.items.length; i++) {
  		if (!this.props.items[i].routeName.match(/\.hidden$/)) props.items.push(this.props.items[i]);
  	}
    // Logger.dumpLog(props);
  	
    return (
      <RNDrawerItems {...props} />
    );
  }
}
