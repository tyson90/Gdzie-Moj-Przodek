import React, { Component } from 'react';
import { TextInput, Keyboard } from 'react-native';

export class Input extends Component {
	render() {
		return (
				<TextInput
					{...this.props}
					onSubmitEditing={() => {
						if (typeof this.props.onSubmitEditing == 'function') this.props.onSubmitEditing();
						Keyboard.dismiss();
					}}
				/>
		);
	}
}