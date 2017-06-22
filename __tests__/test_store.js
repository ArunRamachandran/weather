jest.unmock('../app/store/WeatherForecastStore');
jest.unmock('../app/store/Store');

//import dispatcher from '../app/dispatcher/Dispatcher';
import AppConstants from '../app/constant/Constants';

const {
	API_CONSTANT,
	EVENT_CONSTANT
} = AppConstants;

describe('Test WeatherForecastStore', () => {

	//mock actions inside dispatch payloads
	let weatherLoaded = {
		source: 'VIEW_ACTION',
		action: {
			actionType: API_CONSTANT.LOAD_DATA,
			data: []
		}
	}
	
	let dispatcher, WeatherForecastStore, callback;

	beforeEach(function () {
   dispatcher = require('../app/dispatcher/Dispatcher');
   WeatherForecastStore = require('../app/store/WeatherForecastStore'); //**load in store**
   callback = dispatcher.register.mock.calls[0][0];
	});

	it('registers a callback with the dispatcher', () => {
		//expect(dispatcher.register.mock.calls.length).toBe(1);
	});

})