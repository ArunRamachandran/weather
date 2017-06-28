'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastingZone from './ForecastingZone.jsx';
import DetailedView from './DetailedView.jsx';
import {fetchWeatherForecastData} from '../actions/WeatherForecastActions';
import WeatherForecastStore from '../store/WeatherForecastStore';
import AppConstants from '../constant/Constants';
import {Icon} from 'react-mdl';
import {formatWeatherForcastingData} from '../utils/formatWeather.js';
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
			weather: null,
			isDetailedView: false,
			selectedIndex: null
		}
	}
	
	componentDidMount() {
		// Initiating API call to fetch weather forcasting data
		fetchWeatherForecastData();
		WeatherForecastStore.addChangeListner(EVENT_CONSTANT.DATA_LOADED, this.updateWeather);
	}

	componentWillUnMount() {
		WeatherForecastStore.removeChangeListner(EVENT_CONSTANT.DATA_LOADED, this.updateWeather);
	}

	updateWeather = (data) => {
		let weather = formatWeatherForcastingData(data);
		this.setState({ weather: weather });
	}

	enableDetailedView = (id) => {
		//console.log("Detailed view: ", id, "weather : ", this.state.weather);
		this.setState({
			isDetailedView: true,
			selectedIndex: id
		})
	}

	handleCloseDialog = () => {
		this.setState({
			isDetailedView: false,
			selectedIndex: null
		})
	}

	render () {
		const today = new Date().toLocaleString();;
		return (
			<div className="container_wraper">
				<div>
					<p className="location">Bangalore, IN</p>
					<img className="locationIcon" src="./app/images/location_1x_black.png"/>
					<p className="currentDate">{today}</p>
				</div>
				<ForecastingZone weather={this.state.weather} enableDetailedView={this.enableDetailedView}/>
				{this.state.isDetailedView && 
					<DetailedView 
						weather={this.state.weather} 
						selectedIndex={this.state.selectedIndex} 
						handleCloseDialog={this.handleCloseDialog}/>}
			</div>
		);
	}

}