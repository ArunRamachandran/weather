'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import '../stylesheets/forecastingZone.scss';

const cardStyle = {
	width: '220px',
	height: '120px',
	margin: 'auto'
}

export default class ForecastingZone extends Component {

	static PropTypes = {
		weather: PropTypes.array,
		enableDetailedView: PropTypes.func.isRequired
	};

	constructor (props) {
		super (props);
	}

	getDate = (date) => {
		const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return weekdays[new Date(date).getDay()];
	}

	getMatchingIcons = (weather) => {
		let icon, weatherString = weather.toLowerCase();
		switch (true) {
			case weatherString.indexOf("clear") !== -1:
				icon = 'clear';
				break;

			case weatherString.indexOf("broken") !== -1:
				icon = 'partly_cloudy';
				break;

			case weatherString.indexOf("scatter") !== -1:
				icon = 'partly_cloudy';
				break;

			case weatherString.indexOf("cloud") !== -1:
				icon = 'cloudy';
				break;

			case weatherString.indexOf("rain") !== -1:
				icon = 'rain';
				break;

			case weatherString.indexOf("thunderstorm") !== -1:
				icon = 'thunder_storm';
				break;

			case weatherString.indexOf("snow") !== -1:
				icon = 'snow_clouds';
				break;

			default:
				icon = 'cloudy';
				break;
		}
		return icon;
	}

	renderData = (data) => {		
		let contents = data.map((weather, index) => {
			const date = weather.forecastingDate;
			const forecastingData = weather.data[0];
			const temp = (forecastingData.main.temp - 273.15).toFixed(2); // converting temp to degree celsius 
			const img = this.getMatchingIcons(forecastingData.weather[0].main);
			return (
				<div className="cardViews" key={index}>
					<Card shadow={0} style={cardStyle} className="weatherCards" onClick={() => {this.props.enableDetailedView(index)}}>
						<CardTitle className="weatherCardTitle" expand style={{background: 'url(./app/images/'+ `${img}` +'.png)' + ' right 5% bottom 20% no-repeat #46B6AC'}}>
							{temp} °C
						</CardTitle>
						<CardText>
							<div className="weatherCardText">
								<span className="weatherCardText1">{this.getDate(date)}, {date}</span>
								<span className="weatherCardText2">{forecastingData.weather[0].description}</span>
								<span className="weatherCardText4">Humidity : {forecastingData.main.humidity}</span>
							</div>
	    			</CardText>
	    			<CardActions border>
	    			</CardActions>
					</Card>
				</div>
			);
		});
		return contents;
	}

	render () {

		return (
				<div className="forecastingLayout">
					{this.props.weather ? 
						this.renderData(this.props.weather) : 
						<h4>Loading ..</h4>
					}
				</div>
		);

	}

}