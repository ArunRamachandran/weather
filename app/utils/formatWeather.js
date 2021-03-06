
/**
 * @description : Function to format the received forcasting data according to the 
 *              next 5 days 
 */
function formatWeatherForcastingData (weather) {
	const currentDate = weather.list[0].dt_txt && weather.list[0].dt_txt.split(" ")[0]; // Extracting YYYY-mm-dd from the date time string
	const dateList = getForecastingDates(currentDate);
	const data = getForecastingContents(weather, dateList);
	return data;
}

function getForecastingDates (currentDate) {
	let dates = []; // Array to keep the forecasting dates
	dates.push(currentDate);
	let today = new Date(currentDate);

	for (let i = 1; i <= 4; i++ ) {
		let nextDay = new Date();
		nextDay.setDate(today.getDate() + i);
		dates.push(getFormattedDate(nextDay));
	}

	return dates;
}

/** 
  * @param {string} [dateString] [sample date string - 'YYYY-mm-dd']
	* @description: Function to convert a date time value to 'YYYY-mm-dd' date format
	*
	*/
function getFormattedDate (dateTime) {
		let date, day, month, year;
		date = new Date(dateTime);
		month = '' + ( date.getMonth() + 1 );
		day = '' + date.getDate();
		year = date.getFullYear();

		if ( month.length < 2 ) {
			month = '0' + month;
		}

		if ( day.length < 2 ) {
			day = '0' + day;
		}

	return [year, month, day].join('-');
}

/** @param1: weatherData : Object of weather forecasting information
  * @param2: dateList : Array of date strings
  *
  * @description: Function to classify random weather forecasting data on the basis of respective days 
  *
  */
function getForecastingContents (weatherData, dateList) {
	let forecastingContent = [];
	dateList.forEach((date, index) => {
		// Structure of the returning obj should be {forecastingDate: 'YYYY-mm-dd', data: [...]}
		let obj = {};
		let values = [];
		obj.forecastingDate = date;

		weatherData.list.forEach((weather) => {
			let weatherDt = weather.dt_txt && weather.dt_txt.split(" ")[0]; // Extracting the date part from the received weather data
			weatherDt === date && values.push(weather);
		})

		obj.data = values;
		forecastingContent.push(obj);
	});
	return forecastingContent;
}

export {
	formatWeatherForcastingData,
	getFormattedDate
}
