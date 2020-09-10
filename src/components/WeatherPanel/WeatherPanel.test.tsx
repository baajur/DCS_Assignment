import React from 'react';
import { mount } from 'enzyme';
import WeatherPanel from './WeatherPanel';
import { sampleWeatherData } from 'tests';

const id = Object.keys(sampleWeatherData)[0];
const data = sampleWeatherData[id];

describe('components/WeatherPanel', () => {
    it('should render properly', async () => {
        const wrapper = mount(
            <WeatherPanel
                data={data}
                toggleFavorite={() => {}}
                onPanelClick={() => {}}
                onDeleteClick={() => {}}
            />
        );

        await new Promise(resolve => setTimeout(resolve, 1000));

        wrapper.update();

        expect(wrapper.find('.WeatherPanel').length).toEqual(1);
        expect(wrapper.find('button.favorite').length).toEqual(1);
        expect(wrapper.find('button.close').length).toEqual(1);
        expect(wrapper.find('.Temperature').length).toEqual(1);
        expect(wrapper.find('.WeatherInformation').length).toEqual(2);
    });
});