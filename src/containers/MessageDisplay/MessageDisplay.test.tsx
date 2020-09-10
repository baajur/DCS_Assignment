import React from 'react';
import { mount } from 'enzyme';
import { Root } from 'containers/Root';
import { MessageDisplay } from './index';
import {
    addNewMessage,
    addToFavorite,
    removeFromFavorite
} from 'actions';
import { MessageTypes } from 'configs';

describe('containers/MessageDisplay', () => {
    it('should render properly', async () => {
        const wrapper = mount(
            <Root>
                <MessageDisplay/>
            </Root>
        );

        await new Promise(resolve => setTimeout(resolve, 1000));
        wrapper.update();

        expect(wrapper.find('.MessageDisplay').length).toEqual(1);

        // favorite note

        const store = Root.getStore();
        store.dispatch(addNewMessage(
            MessageTypes.favorite,
            'favorite text'
        ));
        wrapper.update();
        expect(
            wrapper.find('.MessageDisplay').hasClass('favorite')
        ).toBeTruthy();

        // success note
        store.dispatch(addToFavorite(1, '1'));
        wrapper.update();
        expect(
            wrapper.find('.MessageDisplay').hasClass('success')
        ).toBeTruthy();

        // delete note
        store.dispatch(removeFromFavorite(1, 'city'));
        wrapper.update();
        expect(
            wrapper.find('.MessageDisplay').hasClass('delete')
        ).toBeTruthy();
    });
});