//jest.unmock('../app/store/WeatherForecastStore');
//jest.unmock('../app/store/Store');

import Dispatcher from '../app/dispatcher/Dispatcher';
import AppConstants from '../app/constant/Constants';
import WeatherForecastStore from '../app/store/WeatherForecastStore';

const {
	API_CONSTANT,
	EVENT_CONSTANT
} = AppConstants;

describe('Test WeatherForecastStore', () => {

	//mock actions inside dispatch payloads
	let payLoad = {
			type: API_CONSTANT.LOAD_DATA,
			data: []
	}

it('Store should listen for the actions', () => {
		// dispatch action ( store is listening for action )
		Dispatcher.dispatch(payLoad);
		let data = WeatherForecastStore.currentState();
		// assertions
		expect(data).toEqual([]);
	});
	
})