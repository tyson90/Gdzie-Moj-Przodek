import React from 'react';
import { Image } from 'react-native';

import { css } from '../css';

export const BgImage = (props) => (
  <Image style={[css.background, props.style]} source={{uri: 'http://coolwallpaper.in/wp-content/uploads/2016/05/hd-nature-wallpapers-for-android-phones-free-download-lago-arvore-e-ceu-azul-7460a-IEtiZF.jpg'}}>
    {props.children}
  </Image>
)
