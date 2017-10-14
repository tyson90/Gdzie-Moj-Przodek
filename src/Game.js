export const images = {
	road: require('./images/road2.png'),
	car: function(i) {
		switch(i) {
			default:
			case 1: return require('./images/cars/1.png');
			case 2: return require('./images/cars/2.png');
			case 3: return require('./images/cars/3.png');
			case 4: return require('./images/cars/car-1.1.png');
			case 5: return require('./images/cars/car-prototype-1.png');
		}
	},
	lights: function(i) {
		switch(i) {
			default:
			case 1: return require('./images/cars/lights/1.png');
			case 2: return require('./images/cars/lights/2.png');
			case 3: return require('./images/cars/lights/3.png');
		}
	},
}


import { cols, cols2 } from './carColors';
export const carColors = cols2;


// params for each car model
export const carParams = {
	acceleration: [12, 10],
	max_speed: [240, 250],
	fuel: [100],
	gears: [
		[40, 90, 140, 190, 240, 300],
	],
	get: function(param_name, model_id=0) {
		model_id--;
		if (!this[param_name]) {
			console.warn('There is no param named ', param_name);
			return null;
		}
		
		if (this[param_name].length < model_id +1) model_id = 0;
		// console.log('get param', param_name, 'for model', model_id+1);
		return this[param_name][model_id];
	},
	getAll: function(model_id=0) {
		let params = {};
		for (k in this) {
			if (this.hasOwnProperty(k) && this[k].length && typeof this[k] == 'object') {
				params[k] = this.get(k, model_id);
			}
		}
		return params;
	},
	getGear: function(speed, model_id) {
		let gears = this.get('gears', model_id),
				gear = 0;
		
		do {
			// console.log('gear:', gear, 'speed:', speed);
		} while (gear < gears.length && gears[gear++] < speed);
		
		return gear;
	},
}


// settings for acceleration
export const accSettings = {
	// base acceleration modifier based on carParams.acceleration
	mod: 2.38 * carParams.get('acceleration', 1),
	getMod: function(model_id) {
		let base_acc = carParams.get('acceleration', 1),
				result = this.mod * carParams.get('acceleration', model_id) / base_acc;
		
		result *= 12 / base_acc;
		result *= 1 - (this.gear_mod / 10);
		result *= this.react / 0.700;
		
		return result.toFixed(2) -0;
	},
	
	// base assumet time for react(-ion)
	react: 0.700,
	
	// flatting gears diff if gear_mod > 0
	gear_mod: 1,
	
	// calculate acceleration based on delay (user reaction time), gear, and own properties
	calc: function(delay, gear, model_id=1) {
		delay /= 1000;
		let result = (this.react / delay) * this.getMod(model_id) / (gear + this.gear_mod) * (1 + this.gear_mod);
		// console.log(delay, gear, model_id, result);
		
		return result.toFixed(1) -0;
	},
	
	decceleration: 30,
	
	// functions to calculate new speed based on old speed
	accelerate: function(speed, delay, gear, model_id) {
		speed += this.calc(delay, gear, model_id);
		
		return speed.toFixed(1) -0;
	},
	
	deccelerate: function(speed) {
		speed -= this.decceleration;
		
		return speed.toFixed(1) -0;
	},
}

// console.log('calc for 1:', accSettings.calc(accSettings.react-0.2, 1, 1));
// console.log('calc for 2:', accSettings.calc(accSettings.react-0.2, 2, 1));
// console.log('calc for 2:', accSettings.calc(accSettings.react-0.2, 3, 1));
// console.log('calc for 2:', accSettings.calc(782, 1, 1));

// 2.38 * 12 * x = 28.6

