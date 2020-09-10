import React from 'react';
import { shallow } from 'enzyme';
import WeatherInformation from './WeatherInformation';

describe('components/WeatherInformation', () => {
    it('should render properly', () => {
        const wrapper = shallow(
            <WeatherInformation
                type='cloud'
                value={5}
            />
        );

        expect(wrapper.find('.WeatherInformation').length).toEqual(1);

        wrapper.unmount();
    });
});