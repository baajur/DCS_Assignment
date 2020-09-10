import { ActionTypes } from 'actions';
import { addNewMessage } from '../messageActions';
import { MessageTypes } from 'configs';

describe('actions/messageActions', () => {
    describe('should return correct action for:', () => {
        it('addNewMessage', () => {
            expect(addNewMessage(
                MessageTypes.info,
                'a'
            )).toEqual({
                type: ActionTypes.addNewMessage,
                payload: {
                    type: MessageTypes.info,
                    content: 'a'
                }
            });
        });
    });
});