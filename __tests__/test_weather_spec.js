import React from 'react';
import { shallow, mount } from 'enzyme';

import Weather from '../app/components/Weather.jsx';
import Header from '../app/components/Header.jsx';
import WeatherContainer from '../app/components/WeatherContainer.jsx';

describe('Test Weather Component', () => {
	
	it('It should render the child components', () => {
		const wrapper = mount(<Weather/>);
		expect(wrapper.contains(<Header/>)).toEqual(true);
		expect(wrapper.contains(<Weather/>)).toEqual(true);
	});

})