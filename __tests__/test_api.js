jest.mock('../app/actions/WeatherForecastActions');
jest.unmock('../__mocks__/request');
jest.unmock('../app/api/WeatherForecastAPI');

import * as WeatherForecastActions from '../app/actions/WeatherForecastActions';
import {fetchWeatherForecastData} from '../app/api/WeatherForecastAPI';
import AppConstants from '../app/constant/Constants';
import Dispatcher from '../app/dispatcher/Dispatcher';

describe('Test forecast API', () => {
	it('dispatch', () => {
		return fetchWeatherForecastData().then(() => {
			expect(WeatherForecastActions.weatherLoaded).toBeCalled();
		})
	})
})