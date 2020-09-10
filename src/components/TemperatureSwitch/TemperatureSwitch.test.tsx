import React from 'react';
import { mount } from 'enzyme';
import { TemperatureSwitch } from './index';

describe('components/TemperatureSwitch', () => {
    it('should render properly', async () => {
        const wrapper = mount(
            <TemperatureSwitch/>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();
        
        wrapper.find('button').simulate('click');
        wrapper.update();

        expect(wrapper.find('.TemperatureSwitch').length).toEqual(1);
        expect(wrapper.find('button').length).toEqual(1);

        wrapper.unmount();
    });
});