import React from 'react';
import { Button as Btn } from 'react-native-elements';

import { css } from '../css';

export const Button = (props) => (
  <Btn
  	{...props}
  	title={props.title}
  	onPress={() => props.onPress()}
  	buttonStyle={[css.btn, props.style]}
  	textStyle={css.btn_txt, props.textStyle}
  />
)
