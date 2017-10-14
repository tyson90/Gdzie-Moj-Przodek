import React from 'react';
import { TouchableOpacity as Touchable, Image } from 'react-native';
import { Text } from './Text';

import { css, vw, colors } from '../css';
import { getLangImg } from '../Helper';

export const LangItem = (props) => {
	let width = Math.floor(80 / props.cols),
			height = Math.round(width / 1.5),
			lang_css = {
				width: vw(width),
				height: vw(height),
			},
			txt_css = {
				position: 'absolute',
				fontSize: Math.round(lang_css.height * 0.75),
				lineHeight: Math.round(lang_css.height * 1),
				width: '100%',
				textAlign: 'center',
				color: colors.light
			}
	
	return (
	  <Touchable
	  	onPress={() => props.onPress()}
	  	style={[css.setup_lang_item, css.setup_lang_item_border, lang_css, props.style]}
	  >
	  	<Text style={css.setup_lang_txt, txt_css}>{props.lang.toUpperCase()}</Text>
	  	<Image style={[css.setup_lang_img, css.setup_lang_item_border]} source={getLangImg(props.lang)} />
	  </Touchable>
	)
}
