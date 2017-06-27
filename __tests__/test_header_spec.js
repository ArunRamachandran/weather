import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../app/components/Header.jsx';

describe('Test Header Component', () => {
	it('Should have expeted class associated with it', () => {
		const container = shallow(<Header/>);
		expect(container).toBeDefined();
		expect(container.hasClass('weatherAPI_headerBar')).toEqual(true);
	});

	it('It should contain the proper Header', () => {
		const container = shallow(<Header/>);
		expect(container.find('p').text()).toEqual('WeatherForecastNow.com');
	});
})