'use strict'

import Request from './RequestWebUtils';
import * as WeatherForecastActionCreator from '../actions/WeatherForecastActions';

const weather_api = "https://api.openweathermap.org/data/2.5/forecast";
const default_location = "Bangalore,IN";
const api_key = "appid=634b460b9bf36052828abfeb4110fda5";

export function fetchWeatherForecastData (location) {
	
	const city = location ? location : default_location;
	const url = `${weather_api}?q=${city}&${api_key}`;

	return Request.get(url)
		.then((body, res) => {
			console.log("data : ", body);
			WeatherForecastActionCreator.weatherLoaded(body);
		});
}