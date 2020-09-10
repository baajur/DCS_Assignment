import React from 'react';
import { mount } from 'enzyme';
import WeatherDetail from './WeatherDetail';
import { sampleWeatherData } from 'tests';

const id = Object.keys(sampleWeatherData)[0];
const data = sampleWeatherData[id];

describe('components/WeatherDetail', () => {
    it('should render properly', async () => {
        const wrapper = mount(
            <WeatherDetail
                data={data}
            />
        );

        await new Promise(resolve => setTimeout(resolve, 1000));

        wrapper.update();

        expect(wrapper.find('.WeatherDetail').length).toEqual(1);
        expect(wrapper.find('.WeatherInformation').length).toEqual(4);
        expect(wrapper.find('.Temperature').length).toEqual(3);

        wrapper.unmount();
    });
});