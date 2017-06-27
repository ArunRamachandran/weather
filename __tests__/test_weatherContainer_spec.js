import React from 'react';
import { shallow, mount } from 'enzyme';

import WeatherContainer from '../app/components/WeatherContainer.jsx';
import ForecastingZone from '../app/components/ForecastingZone.jsx';

describe('Test WeatherContainer Component', () => {
	
	it('WeatherContainer should have expected class associated', () => {
		const container = shallow(<WeatherContainer/>);
		expect(container).toBeDefined();
		expect(container.hasClass('container_wraper')).toEqual(true);
	});

	it('It should contain the location information', () => {
		const container = shallow(<WeatherContainer/>);
		const p = container.find('.location');
		expect(p.text()).toEqual('Bangalore, IN');
	});

	it('Component should invoke the function to fetch data', () => {
		let onWillMount = jest.fn();
		WeatherContainer.prototype.componentWillMount = onWillMount;
		const container = mount(<WeatherContainer/>);
		expect(onWillMount).toBeCalled();
	})

})