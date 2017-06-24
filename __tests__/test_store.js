//jest.unmock('../app/store/WeatherForecastStore');
//jest.unmock('../app/store/Store');

import Dispatcher from '../app/dispatcher/Dispatcher';
import AppConstants from '../app/constant/Constants';
import WeatherForecastStore from '../app/store/WeatherForecastStore';

const sampleWeather = {
	"city":{"id":1851632,"name":"Shuzenji",
	"coord":{"lon":138.933334,"lat":34.966671},
	"country":"JP",
	"cod":"200",
	"message":0.0045,
	"cnt":38,
	"list":[{
    "dt":1498284000,
	   "main":{  
	      "temp":301.82,
	      "temp_min":300.557,
	      "temp_max":301.82,
	      "pressure":923.43,
	      "sea_level":1018.96,
	      "grnd_level":923.43,
	      "humidity":66,
	      "temp_kf":1.26
	   },
     "weather":[  
        {  
           "id":802,
           "main":"Clouds",
           "description":"scattered clouds",
           "icon":"03d"
        }
     ],
     "clouds":{  
        "all":48
     },
     "wind":{  
        "speed":8.32,
        "deg":260.501
     },
     "rain":{  

     },
     "sys":{  
        "pod":"d"
     },
     "dt_txt":"2017-06-24 06:00:00"}
	 ]}
};

const {
	API_CONSTANT,
	EVENT_CONSTANT
} = AppConstants;

describe('Test WeatherForecastStore', () => {

	//mock actions inside dispatch payloads
	let payLoad = {
			type: API_CONSTANT.LOAD_DATA,
			data: sampleWeather
	}

it('Store should listen for the actions', () => {
		// dispatch action ( store is listening for action )
		Dispatcher.dispatch(payLoad);
	
		let data = WeatherForecastStore.getData();
		// assertions
		//expect(WeatherForecastStore.getData()).toEqual('Bangalore, IN');
	});
	
})