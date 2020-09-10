import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { PageHome } from './index';
import { Root } from 'containers/Root';
import { sampleWeatherData } from 'tests';

describe('containers/PageHome', () => {
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
                <BrowserRouter>
                    <Route component={PageHome}/>
                </BrowserRouter>
            </Root>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('.WeatherPanel').length).toEqual(
            Object.keys(sampleWeatherData).length
        );

        // toggle favorite

        let firstPanel = wrapper.find('.WeatherPanel').first();

        expect(firstPanel).toEqual(wrapper.find('.WeatherPanel').first());

        firstPanel.find('.favorite').simulate('click');
        wrapper.update();

        firstPanel.find('.favorite').simulate('click');
        wrapper.update();

        // remove weather

        firstPanel.find('.close').simulate('click');
        wrapper.update();

        expect(firstPanel).not.toEqual(wrapper.find('.WeatherPanel').first());

        // click on panel

        firstPanel = wrapper.find('.WeatherPanel').first();

        firstPanel.find('.inner > button').simulate('click');
        wrapper.update();

        wrapper.unmount();
    });
});