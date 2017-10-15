import React from 'react';
import { Button } from './components';

export const markers = [
	{
		title: 'Cmentarz Wolski',
		description: 'Wolska 180/182, 01-258 Warszawa',
		latlng: {
			latitude: 52.228686,
		  longitude: 20.934985,
		},
		type: 'cementary',
	},
	{
		title: 'Cmentarz Powązkowski',
		description: 'Powązkowska 14, 01-797 Warszawa',
		latlng: {
			latitude: 52.254398,
		  longitude: 20.972898,
		},
		type: 'cementary',
	},
	
	// groby
	{
		title: 'Grób Stanisława Moniuszki',
		description: '',
		latlng: {
			latitude: 52.253037,
		  longitude: 20.977397,
		},
		type: 'grove',
	},
	{
		title: 'Grób Bolesława Prusa',
		description: '',
		latlng: {
			latitude: 52.250953,
		  longitude: 20.970801,
		},
		type: 'grove',
	},
	
	{
		title: 'Babcia Halina',
		description: '',
		latlng: {
			latitude: 52.253032,
		  longitude: 20.971628,
		},
		type: 'my-grove',
	},
]

export const getMarkerIcon = (typ) => {
	// console.log(typ, '****************************');
  switch(typ) {
  	default: return require('./images/marker.png');
  	
  	case 'grove': return require('./images/marker-grove.png');
  	case 'my-grove': return require('./images/marker-my-grove.png');
  }
	
}

export const zooms = {
	in: 0.080,
	out: 5,
}
