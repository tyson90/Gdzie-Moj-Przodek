import React from 'react';
import { connect } from 'react-redux';
import en from './locales/en';
import pl from './locales/pl';

import { Logger, showInfo } from '../Helper';

const translations = {
	en,
	pl,
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

export class I18n {
	defaultLang = Object.keys(translations)[0]; // 'en'
	_lang = this.defaultLang;
	
	setLocale(lang) {
		Logger.log(`**\nchanging lang:\n${this._lang} > ${lang}`);
		if(this._lang == lang) Logger.log('this is the same lang, ommited');
		else {
			if (Object.keys(translations).indexOf(lang) > -1) this._lang = lang;
			else showInfo(this.translate('info.cant_find_locale', [lang]), 'error');
		}
	}
	
	translate (string, lang=this._lang, log=[], original_lang, vars=null) {
		try {
			switch(typeof lang) {
				case 'string': break;
				
				case 'object':
					if (lang.length) { // so, this is not empty [probably] array
						if (!vars) vars = lang;
					}
				default:
					lang = this._lang;
					break;
			}
			
			let arr = string.split('.');
			let trans = translations[lang];
			
			// if (trans === undefined) trans = translations[Object.keys(translations)[0]];
			
			do {
				log.push(trans);
				trans = trans[arr.shift()];
			} while (arr.length && trans !== undefined);
			
			if (typeof trans == 'string') {
				let prefix = original_lang ? `[${original_lang.toUpperCase()}>${lang.toUpperCase()}]: ` : '';
				return prefix + this.insertVarsToPlaceholders(trans, vars);
			}
			else if (lang != this.defaultLang) {
				console.log(`Trying get default lang tanslation for '${string}'...`);
				return this.translate(string, this.defaultLang, log, lang, vars);
			} else
					throw(`String '${string}' not found in '${(original_lang || lang)}' locale`);
			
		} catch(e) {
			// console.warn('Error in translate string func with params', [string, lang]);
			// console.warn(e);
			// console.log('I tryied serch it in:', log);
		}
		
	 	return /*'[H]: '+*/ this.humanize(string);
	}
	
	insertVarsToPlaceholders (string, vars) {
		while (vars && vars.length) {
			string = string.replace('%s', vars.shift());
		}
		
		return string;
	}
	
	humanize (string) {
		string = string.split('.').slice(-1)[0];
		string = string.split('_');
		
		return string.join(' ').capitalize();
	}
	
	guesLang (lang=this.defaultLang) {
		Logger.log('Gues lang from: ', lang);
		lang = lang.slice(0, 2).toLowerCase();
		Logger.log('And I think it\'s', lang);
		if (Object.keys(translations).indexOf(lang) < 0) {
			Logger.warn('But I have not that in translations, so I set it to default: ', this.defaultLang);
			lang = this.defaultLang;
		}
		
		return lang;
	}
}

const Localization = new I18n();

function _ (string, lang) {
	return Localization.translate(string, lang);
}

function setLocale (lang=null) {
	if (lang) return Localization.setLocale(lang);
}

function getLangs () {
	return Object.keys(translations);
}

module.exports = {
	Localization,
	_,
	setLocale,
	getLangs,
}

