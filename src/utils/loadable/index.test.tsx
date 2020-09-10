import React from 'react';
import { shallow } from 'enzyme';
import { loadable } from './index';
import SpinnerLoader from 'components/SpinnerLoader/SpinnerLoader';
import { LazyLoadingSpinner } from 'components/LazyLoadingSpinner';

const REACT_SUSPENSE_SYMBOL = 'Symbol(react.suspense)';

describe('utils/loadable', () => {
    const dynamicImport = () => import('components/SpinnerLoader/SpinnerLoader');

    it('With dynamic import, should load suspense, lazy, and imported component properly', async () => {
        const LazyComponent = loadable(dynamicImport, { size: 'small' });

        const wrapper = shallow(
            <LazyComponent/>,
            {
                suspenseFallback: true
            }
        );

        const importedComponent = await wrapper
            .getElements()[0]
            .props
            .children
            .type
            ._ctor() ;

        const firstElement = wrapper.getElements()[0];

        expect(firstElement.type.toString()).toEqual(REACT_SUSPENSE_SYMBOL);
        expect(firstElement.props.fallback.type).toEqual(LazyLoadingSpinner);
        expect(importedComponent.default).toEqual(SpinnerLoader);
    });

    it('should render properly when no fallback is provided', () => {
        const LazyComponent = loadable(dynamicImport);
        const wrapper = shallow(
            <LazyComponent/>,
            {
                suspenseFallback: true
            }
        );
        const firstElement = wrapper.getElements()[0];

        expect(firstElement.props.fallback).toBeNull();
    });
});
