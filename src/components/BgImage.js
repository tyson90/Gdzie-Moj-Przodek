import React from 'react';
import { Image } from 'react-native';

import { css } from '../css';

export const BgImage = (props) => (
  <Image style={[css.background, props.style]} source={props.src}>
    {props.children}
  </Image>
)
