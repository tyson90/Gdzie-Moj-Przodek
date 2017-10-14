import { random, Logger } from '../Helper';

let _schemes = {
	darkNgreen: {
	  white: '#060807',
	  light: '#293232',
	  light2: '#404E4D',
	  
	  black: '#FDE74C',
	  gr1: '#FDE74C',
	  gr2: '#E6D246',
	  
	  blue: '#9BC53D',
	  light_blue: '#ADCF60',
	  blue_inactive: '#7FA232',
	  
	  red: '#5BC0EB',
	  red_inactive: '#4B9EC1',
	  
	  error: '#C3423F',
	},
	
	lightNorange: {
	  white: '#FDFFFF',
	  light: '#E6E8E8',
	  light2: '#D0D1D1',
	  
	  black: '#0C090D',
	  gr1: '#383539',
	  gr2: '#4E4C4F',
	  
	  blue: '#F06C2F',
	  light_blue: '#F28654',
	  blue_inactive: '#C55927',
	  
	  red: '#A5CCB4',
	  red_inactive: '#B5E0C5',
	  
	  error: '#C3423F',
	},
	
	coffee: {
	  white: '#512C0A',
	  light: '#59300A',
	  light2: '#684220',
	  
	  black: '#DDBF98',
	  gr1: '#E0C4A1',
	  gr2: '#E3CAAA',
	  
	  blue: '#CDA76E',
	  light_blue: '#D6B788',
	  blue_inactive: '#A8895B',
	  
	  red: '#D9AB8C',
	  red_inactive: '#C69C80',
	  
	  error: '#C27D72',
	},
	
	sea: {
	  white: '#073262',
	  light: '#083D77',
	  light2: '#1E4E83',
	  
	  black: '#ECF3F4',
	  gr1: '#D3DCDC',
	  gr2: '#BEC6C7',
	  
	  blue: '#2FC6F1',
	  light_blue: '#8BDFF7',
	  blue_inactive: '#0199C4',
	  
	  red: '#C2FFED',
	  red_inactive: '#95D1BF',
	  
	  error: '#C3423F',
	},
	
}
_schemes.rand = () => {
	let keys = [];
	for (k in _schemes) {
		if (typeof _schemes[k] == 'object' && _schemes[k].white) keys.push(k);
	}
	
	return keys[random(0, keys.length -1)];
}
_schemes.get = (key) => {
	return _schemes[key ? key : _schemes.rand()];
}

export const colorSchemes = _schemes;
