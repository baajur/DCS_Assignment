import { ActionTypes } from './types';
import { MessageTypes } from 'configs';

// addNewMessage

export interface AddNewMessage {
    type: ActionTypes.addNewMessage,
    payload: {
        type: MessageTypes,
        content: string | Error
    }
}

export const addNewMessage = (
    type: MessageTypes,
    content: string | Error
): AddNewMessage => ({
    type: ActionTypes.addNewMessage,
    payload: {
        type,
        content
    }
});

