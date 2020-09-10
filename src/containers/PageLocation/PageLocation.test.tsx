import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { PageLocation } from './index';
import { Root } from 'containers/Root';
import {
    updateGeolocation,
    updateGeolocationFailed,
    fetchLocationWeatherSuccess,
} from 'actions';
import { samplePosition, sampleWeatherData } from 'tests';

const id = Object.keys(sampleWeatherData)[0];
const data = sampleWeatherData[id];

jest.mock('google-map-react', () => {
    const { TestComponent } = jest.requireActual('tests/TestComponent');

    return TestComponent;
});

describe('containers/PageLocation', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
    });

    it('should render properly', async () => {
        const wrapper = mount(
            <Root>
                <BrowserRouter>
                    <Route
                        component={PageLocation}
                    />
                </BrowserRouter>
            </Root>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        // Block geolocation

        const store = Root.getStore();
        store.dispatch(
            updateGeolocationFailed(new Error('geolocation failed'))
        );
        wrapper.update();
        
        expect(wrapper.find('.ask-permission').length).toEqual(1);
        expect(wrapper.find('.WeatherDetail').length).toEqual(0);

        // Allow geolocation

        store.dispatch(
            updateGeolocation(samplePosition)
        );
        store.dispatch(
            fetchLocationWeatherSuccess(data)
        )

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('.WeatherDetail').length).toEqual(1);
    });
});