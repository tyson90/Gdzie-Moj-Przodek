import React from 'react';
import { View } from 'react-native';
import { Text } from '../components';

import { css } from '../css';

export const Center = (props) => (
  <View style={css.view_center}>
    {props.children}
  </View>
)
