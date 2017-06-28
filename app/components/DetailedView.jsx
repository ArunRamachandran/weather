import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, Spinner } from 'react-mdl';
import '../stylesheets/detailedView.scss';

export default class DetailedView extends Component {

	getWeekDay = (date) => {
		const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return weekdays[new Date(date).getDay()];
	}

	extractContents = (weather) => {
		let contents = weather.map((data, index) => {
			const date = new Date(data.dt_txt);
			const time = date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
			const imgUrl = 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png';
			const temp = (data.main.temp - 273.15).toFixed(2);
			return (
				<div className="detailed_forecasting_view">
					<p>{time}</p>
					<img src={imgUrl}/>
					<p>{temp} °C</p>
				</div>
			);
		});
		return contents;
	}

	render () {

		const {
			weather,
			selectedIndex,
		} = this.props;

		const selected = weather[selectedIndex];
		const weekDay = this.getWeekDay(selected.forecastingDate);

		return (
			<Dialog open={true} style={{display: 'block', zIndex: '10', top: '90px', width: '70%'}}>
				<div className="dialogue_title">
					<h4 className="dialogue_title1">Bangalore, IN</h4>
					<h5 className="dialogue_title2">{selected.forecastingDate}, {weekDay}</h5>   
				</div>

      <DialogContent>
      	<div className="dialogue_content">
      		{this.extractContents(selected.data)}
      	</div>
      </DialogContent>

			<DialogActions>
        <Button type='button' onClick={this.props.handleCloseDialog}>Close</Button>
      </DialogActions>
			</Dialog>
		);
	}
}