import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { css } from '../css';

export class Drawer extends Component {
  render() {
    return (
      <ScrollView style={css.drawer}>
        {this.props.children}
      </ScrollView>
    );
  }
}
