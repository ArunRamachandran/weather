'use strict'

import React, {Component} from 'react';
import '../stylesheets/header.scss';

export default class Header extends Component {

	constructor (props) {
		super (props);
	}

	render () {

		return (
			<div className="weatherAPI_headerBar">
				<p>Weather.io</p>
			</div>
		);
	}

}
