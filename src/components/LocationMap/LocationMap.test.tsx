import React from 'react';
import { shallow } from 'enzyme';
import LocationMap from './LocationMap';

jest.mock('google-map-react', () => {
    const { TestComponent } = jest.requireActual('tests/TestComponent');

    return TestComponent;
});

describe('components/LocatonMap', () => {
    it('should work', () => {
        const wrapper = shallow(
            <LocationMap
                lat={1}
                lng={1}
            />
        );

        expect(wrapper.find('.LocationMap').length).toEqual(1);
    });
});