import React, { Component } from 'react';
import { Keyboard, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Grid } from './Grid';
import { Err } from './Err';
import { Button } from './Button';
import { Text } from './Text';

import { DataBase } from '../DataBase';
import { css, colors } from '../css';
import { Logger } from '../Helper';

export class GroveForm extends Component {
	constructor(...args) {
		super(...args);
		
		this.state = {
			name: '',
    	error: false,
    	submitting: false,
    	kb_height: 0,
		}
	}
  
  mergeState(newState={}, callback=()=>{}) {
  	this.setState(prevSate => {
  		return Object.assign(prevSate, newState);
  	}, () => {callback()});
  }
	
	componentWillMount(nextState, nextProps) {
  	this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (evt) => { this._keyboardDidShow() });
  	this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (evt) => { this._keyboardDidHide() });
  }
  
  componentWillUnmount () {
  	this.keyboardDidShowListener.remove();
  	this.keyboardDidHideListener.remove();
  }
  
  _keyboardDidShow (evt) {
  	Logger.dumpLog(evt);
  	this.mergeState({
  		kb_height: evt.endCoordinates.height,
  	}, () => {
	  	Logger.log('Keyboard Shown');
  		Logger.dumpLog(this.state);
  	});
  }
  
  _keyboardDidHide (evt) {
  	this.mergeState({
  		kb_height: 0,
  	});
  	Logger.log('Keyboard Hidden');
  }
	
	saveInputData(key, text) {
  	this.mergeState({
  		[key]: text
  	});
  }
  
  submit() {
		if (!this.state.name) {
			this.mergeState({
				submitting: false,
				error: 'Pole nie może być puste'
			});
		} else {
			this.mergeState({
				submitting: true,
				error: false,
			}, () => {
				addToDb(this.state.name);
			});
		}
	}
	
	addToDb(name) {
		DataBase.add('groove', 'name', name);
	}
	
	showForm() {
		Logger.log('Dodaj grób');
	}
	
	getAddGroveBtn() {
		return (
			<Button
        title={'Dodaj grób'}
        onPress={() => this.showForm()}
        style={[css.btn_home, css.btn_home2, css.form.opener]}
        // disabled={!!this.state.disabled}
        disabledStyle={css.btn_home2_disabled}
      />
		)
	}
	
	render() {
		const error= this.state.error ? (<Err>{this.state.error}</Err>) : null;
		
		return (
      <View style={[css.form.wrapper, { bottom: this.state.kb_height }]}>
				<Grid w={1} style={css.form.form}>
					<FormLabel labelStyle={css.form.label}>{'Wprowadź dane'}</FormLabel>
					<FormInput
						onChangeText={(text) => {this.saveInputData('name', text);}}
						placeholder={'Wpisz imię i nazwisko zmarłego'}
						autoCapitalize={'words'}
						editable={!this.state.submitting}
						// returnKeyType={'next'}
						returnKeyLabel={'Zapisz'}
						containerStyle={css.form.input}
						underlineColorAndroid={colors.secondary}
						inputStyle={css.form.input_text}
						placeholderTextColor={css.form.placeholder.color}
						onSubmitEditing={() => { this.submit() }}
					/>
					<FormLabel labelStyle={css.form.label}>{'Miejsce'}</FormLabel>
					<Text style={css.form.input_text}>{'bieżąca lokalizacja'}</Text>
				</Grid>
		  	{this.getAddGroveBtn()}
		  </View>
		)
	}
}


