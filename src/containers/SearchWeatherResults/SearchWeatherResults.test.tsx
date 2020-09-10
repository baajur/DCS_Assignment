import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SearchWeatherResults from './SearchWeatherResults';
import { Root } from 'containers/Root';
import { sampleSearchResults } from 'tests';
import { searchByCity } from 'actions';

describe('containers/SearchWeatherResults', () => {
    it('should render properly when there is data', async () => {
        const wrapper = mount(
            <Root initialState={{
                search: {
                    currentSearchTerm: 'singapore',
                    results: sampleSearchResults
                }
            }}>
                <SearchWeatherResults
                    onResultClick={() => {}}
                />
            </Root>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('.SearchWeatherResults').exists).toBeTruthy();
        expect(wrapper.find('.WeatherPanel').length).toEqual(1);

        // toggle favoite

        wrapper.find('button.favorite').simulate('click');
        wrapper.update();

        expect(wrapper.find('button.favorite.active').length).toEqual(1);

        wrapper.find('button.favorite').simulate('click');
        wrapper.update();

        expect(wrapper.find('button.favorite.active').length).toEqual(0);


        // display no data

        const store = Root.getStore();
        store.dispatch(searchByCity('not available'));
        wrapper.update();

        expect(wrapper.find('.no-data').length).toEqual(1);
    });


});