'use strict'

import AppDispatcher from '../dispatcher/Dispatcher';
import * as WeatherForecastAPI from '../api/WeatherForecastAPI';
import AppConstants from '../constant/Constants';

const {
	ACTIONS_CONSTANT,
	API_CONSTANT
} = AppConstants;

export function fetchWeatherForecastData (location) {
	WeatherForecastAPI.fetchWeatherForecastData(location);
}

export function weatherLoaded (data) {
	AppDispatcher.dispatch({
		type: API_CONSTANT.LOAD_DATA,
		data: data
	});
}