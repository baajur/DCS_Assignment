import React from 'react';
import { mount } from 'enzyme';
import { Root } from 'containers/Root';
import { App } from './index';
import { sampleWeatherData } from 'tests';

jest.mock('google-map-react', () => {
    const { TestComponent } = jest.requireActual('tests/TestComponent');

    return TestComponent;
});

describe('containers/App', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
    });

    it('should render properly', async () => {
        const wrapper = mount(
            <Root
                initialState={{
                    weather: {
                        data: sampleWeatherData
                    }
                }}
            >
                <App/>
            </Root>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('.App').length).toEqual(1);

        // click to switch temperature unit to F

        wrapper.find('Header')
            .find('.TemperatureSwitch')
            .find('button')
            .simulate('click');
        wrapper.update();

        expect(wrapper.find('.Temperature.f').length).toBeGreaterThan(0);

        // click to switch temperature unit back to C

        wrapper.find('Header')
            .find('.TemperatureSwitch')
            .find('button')
            .simulate('click');
        wrapper.update();

        expect(wrapper.find('.Temperature.f').length).toEqual(0);
    });
});