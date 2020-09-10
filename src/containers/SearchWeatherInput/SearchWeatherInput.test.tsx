import React from 'react';
import { mount } from 'enzyme';
import { Root } from 'containers/Root';
import SearchWeatherInput from './SearchWeatherInput';

describe('containers/SearchWeatherInput', () => {
    it('should render properly', async () => {
        const wrapper = mount(
            <Root>
                <SearchWeatherInput/>
            </Root>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('.SearchWeatherInput').length).toEqual(1);

        wrapper.find('input').simulate('change', {
            target: { value: '123456' }
        });

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('input').props().value).toEqual('123456');
    });
});