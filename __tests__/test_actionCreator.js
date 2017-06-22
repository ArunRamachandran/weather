jest.dontMock('../app/actions/WeatherForecastActions');
jest.dontMock('../app/dispatcher/Dispatcher');
jest.dontMock ("object-assign");

import { weatherLoaded } from '../app/actions/WeatherForecastActions';
import AppConstants from '../app/constant/Constants';
import dispatcher from '../app/dispatcher/Dispatcher';

const { dispatch } = dispatcher;

const {
	ACTIONS_CONSTANT,
	API_CONSTANT
} = AppConstants;

describe('Test actions', () => {
	it ('It should calls the dispatcher', () => {
		const data = [];
		const expectedAction = {
			type: API_CONSTANT.LOAD_DATA,
			data: data
		};

		weatherLoaded(data);
		
		//expect(dispatch.mock.calls.length).toBe(1);
	})
})