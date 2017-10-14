import React from 'react';
import { View } from 'react-native';

import { css } from '../css';

export const Item = (props) => (
  <View style={[css.item, props.style]}>
    {props.children}
  </View>
)
