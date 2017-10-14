import React, { Component } from 'react';
import { ComponentForScreen } from '../components/ComponentForScreen';
import { connect } from 'react-redux';
import {
	DrawerLabel,
	ScreenView,
	Grid,
	LangItem,
} from '../components';

import { setLang } from '../actions';
import { _, getLangs } from '../i18n';

class Screen extends ComponentForScreen {
	static navigationOptions = {
    drawerLabel: (<DrawerLabel title={'menu.change_lang'} route={'ds.lang'} />),
  }
  
  render() {
  	let langs = getLangs(),
  			cols = 2;
  	
  	console.log(langs);
  	langs.push('de', 'fr');
  	// langs.push('fr2', 'it');
  	// console.log(langs);
  	
		return (
			<ScreenView>
				<Grid w={cols}>
					{
						langs.map((lang, i) => (
							<LangItem
								lang={lang}
								key={i}
								onPress={() => this.props.setLang(lang)}
								cols={cols}
							/>
						))
					}
				</Grid>
			</ScreenView>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.app.lang,
});

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action()),
  setLang: (lang) => dispatch(setLang(lang))
});

export const ScreenLanguages = connect(mapStateToProps, mapDispatchToProps)(Screen);
