'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import WeatherContainer from './WeatherContainer.jsx';

export default class Weather extends Component {

	constructor (props) {
		super (props);
	}

	render () {

		return (
			<div>
				<Header/>
				<WeatherContainer/>
			</div>
		);
	}

}