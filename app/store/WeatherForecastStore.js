'use strict'

import dispatcher from '../dispatcher/Dispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import { createStore } from './Store';
import AppConstants from '../constant/Constants';

const {
	API_CONSTANT,
	EVENT_CONSTANT
} = AppConstants;

let _weatherForecastData = null;
let _dateList = [];
let _formattedWeatherData = []

const weatherForecastStore = createStore ({
	currentState () {
		return _weatherForecastData;
	}
});

function updateWeather (data) {
	_weatherForecastData = data;
}

function getData () {
	return _weatherForecastData;
}

weatherForecastStore.dispatchToken = dispatcher.register (action => {

	switch (action.type) {
		case API_CONSTANT.LOAD_DATA:
			updateWeather(action.data);
			//const formattedData = formatWeatherForcastingData (action.data);
			weatherForecastStore.emitChange(EVENT_CONSTANT.DATA_LOADED, action.data);
			break;
	}
});

export default weatherForecastStore;