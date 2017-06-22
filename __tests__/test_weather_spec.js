import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';

import Weather from '../app/components/Weather.jsx';
import Header from '../app/components/Header.jsx';
import WeatherContainer from '../app/components/WeatherContainer.jsx';

describe('Test Weather Component', () => {
	
	it('It should render the child components', () => {
		const wrapper = mount(<Weather/>);
		expect(wrapper.find(Header)).to.have.length(1);
		expect(wrapper.find(WeatherContainer)).to.have.length(1);
	});

})