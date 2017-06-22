'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastingZone from './ForecastingZone.jsx';
import {fetchWeatherForecastData} from '../actions/WeatherForecastActions';
import WeatherForecastStore from '../store/WeatherForecastStore';
import AppConstants from '../constant/Constants';
import '../stylesheets/weatherContainer.scss';

const {
	ACTIONS_CONSTANT,
	API_CONSTANT,
	EVENT_CONSTANT
} = AppConstants;

export default class WeatherContainer extends Component {

	constructor (props) {
		super (props);
		this.state = {
			weather: null
		}
	}
	
	componentWillMount () {
		// Initiating API call to fetch weather forcasting data
		fetchWeatherForecastData();
	}

	componentDidMount() {
		WeatherForecastStore.addChangeListner(EVENT_CONSTANT.DATA_LOADED, this.updateWeather);
	}

	componentWillUnMount() {
		WeatherForecastStore.removeChangeListner(EVENT_CONSTANT.DATA_LOADED, this.updateWeather);
	}

	updateWeather = (data) => {
		this.setState({ weather: data });
		console.log("Received : ", data);
	}

	render () {

		return (
			<div className="container_wraper">
				<p>Bangalore, IN</p>
				<ForecastingZone weather={this.state.weather}/>
			</div>
		);
	}

}