'use strict'

import React, {Component} from 'react';
import {render} from 'react-dom';
import { Spinner } from 'react-mdl';
import '../stylesheets/custom-loader.scss'; 

export default class Loader extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<div className="loaderWrapper">
				<h4 className="loaderText"> Loading Weather ....</h4>
				<div className="spinner">
					<Spinner/>
				</div>
			</div>
		);
	}
}