import React from 'react';
import { shallow } from 'enzyme';
import { PuffLoader } from 'react-spinners';
import { LazyLoadingSpinner } from './LazyLoadingSpinner';

describe('components/LazyLoadingSpinner', () => {
    it('should render properly', () => {
        const wrapper = shallow(<LazyLoadingSpinner/>);

        expect(wrapper.find(PuffLoader).length).toEqual(1);
        wrapper.unmount();
    });
});
