import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { PageDetail } from './index';
import { Root } from 'containers/Root';
import { sampleWeatherData } from 'tests';

const id = Object.keys(sampleWeatherData)[0];
const data = sampleWeatherData[id];

describe('containers/PageLocation', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
    });

    it('should render properly', async () => {
        const wrapper = mount(
            <Root
                initialState={{
                    weather: { data: sampleWeatherData },
                }}
            >
                <BrowserRouter>
                    <Route
                        render={props => (
                            <PageDetail
                                {...props}
                                match={{
                                    isExact: true,
                                    params: { cityId: id },
                                    path: '/',
                                    url: '/string',
                                }}
                                data={null}
                                loading={false}
                                notes={[]}
                                fetchWeatherDetail={() => {}}
                                addNewNote={() => {}}
                                updateNote={() => {}}
                                deleteNote={() => {}}
                            />
                        )}
                    />
                </BrowserRouter>
            </Root>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('.WeatherDetail').length).toEqual(1);
        expect(wrapper.find('.WeatherNote').length).toEqual(1);

        // Add Note

        const newNote = wrapper.find('.WeatherNote');
        newNote.find('textarea').simulate('change', {
            target: { value: 'Test note' }
        });
        newNote.find('button.submit').simulate('click');
        wrapper.update();

        expect(wrapper.find('.WeatherNote').length).toEqual(2);

        // Edit Note

        // cancel
        wrapper.find('.WeatherNote')
            .first()
            .find('button')
            .simulate('click');
        wrapper.update();

        wrapper.find('.WeatherNote')
            .first()
            .find('.cancel')
            .simulate('click');

        // update
        wrapper.find('.WeatherNote')
            .first()
            .find('button')
            .simulate('click');
        wrapper.find('.WeatherNote')
            .first()
            .find('textarea')
            .simulate('change', {
                target: { value: 'Test note CHANGED' }
            });
        wrapper.find('.WeatherNote')
            .first()           
            .find('button.submit')
            .simulate('click');
        wrapper.update();
        
        // delete
        wrapper.find('.WeatherNote')
            .first()
            .find('button')
            .simulate('click');  
        wrapper.find('.WeatherNote')
            .first()           
            .find('.delete')
            .simulate('click');      
        wrapper.update();

        expect(wrapper.find('.WeatherNote').length).toEqual(1);
    });
});