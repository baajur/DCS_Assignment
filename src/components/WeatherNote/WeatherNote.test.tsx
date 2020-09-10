import React from 'react';
import { shallow } from 'enzyme';
import WeatherNote from './WeatherNote';

describe('components/WeatherNote', () => {
    it('should render properly', () => {
        const wrapper = shallow(
            <WeatherNote
            />
        );

        expect(wrapper.find('.WeatherNote').length).toEqual(1);
        expect(wrapper.find('textarea').length).toEqual(1);
    });
});
