import React from 'react';
import { Alert as RNAlert } from 'react-native';

class Alert {
	static a(txt) {
		try	{
			if(typeof txt != 'string') txt= txt.toString();
			
			return RNAlert.alert(txt);
		} catch(e) {
			console.error(e);
		}
	}
	static alert(txt) {
		return Alert.a(txt);
	}
	
	static dump(obj) {
		try {
			if(typeof obj == 'object') return RNAlert.alert(JSON.stringify(obj));
		
			else return Alert.a(obj);
		} catch(e) {
			console.error(e);
		}
	}
}

module.exports= Alert;