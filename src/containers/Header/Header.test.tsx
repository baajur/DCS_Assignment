import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, ReactWrapper } from 'enzyme';
import { Root } from 'containers/Root';
import { Header } from './index';
import { updateGeolocation } from 'actions';
import { samplePosition } from 'tests';

const OutSideComponent = () => {
    return <div className='OutSideComponent'>OutSide</div>
}

describe('containers/Header', () => {
    let addFn = jest.fn();    
    let removeFn = jest.fn();
    let handleClick: Function;
    let wrapper: ReactWrapper;

    beforeEach(() => {
        addFn = jest.fn();
        removeFn = jest.fn();
        document.addEventListener = addFn;
        document.removeEventListener = removeFn;

        addFn.mockImplementation((type, fn) =>  {
            handleClick = fn;
        });
    });
    
    afterEach(() => {
        if (addFn) addFn.mockRestore();
        if (removeFn) removeFn.mockRestore();
        if (wrapper) wrapper.unmount();
    });

    it('should render correctly', async () => {
        const wrapper = mount(
            <Root>
                <BrowserRouter>
                    <Header/>
                    <OutSideComponent/>
                </BrowserRouter>
            </Root>
        );
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('Header').length).toEqual(1);
        
        // redirect to my-location

        const store = Root.getStore();
        store.dispatch(updateGeolocation(samplePosition));
        wrapper.update();

        // toggle menu on mobile

        wrapper.find('.menu-button').simulate('click');
        wrapper.update();

        expect(wrapper.find('.show-on-mobile').length).toEqual(1);

        handleClick({
            target: document.body
        });
        wrapper.update();

        wrapper.unmount();
    });
});