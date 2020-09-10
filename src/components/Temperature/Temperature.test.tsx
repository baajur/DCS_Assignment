import React from 'react';
import { shallow } from 'enzyme';
import Temperature from './Temperature';

describe('components/Temperature', () => {
    it('should render properly', () => {
        const wrapper = shallow(
            <Temperature
                kelvinTemp={700}
                toFixed={2}
            />
        );

        expect(wrapper.find('.Temperature').length).toEqual(1);
    });
});