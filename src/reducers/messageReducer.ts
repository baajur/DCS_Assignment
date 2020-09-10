import moment from 'moment';
import produce from 'immer';
import { ActionTypes, Action } from 'actions';
import { MESSAGES, MessageTypes } from 'configs';

export interface MessageReducer {
    type: MessageTypes;
    content: string;
    createdTime: number;
}

export const INITIAL_STATE: MessageReducer = {
    type: MessageTypes.info,
    content: '',
    createdTime: 0,
};

export const messageReducer = (state = INITIAL_STATE, action: Action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.addNewMessage:
                draft.type = action.payload.type;
                if (action.payload.content instanceof Error) {
                    draft.content = action.payload.content.message;
                } else {
                    draft.content = action.payload.content;
                }
                draft.createdTime = moment().valueOf();
                break;

            case ActionTypes.addToFavorite:
                if (action.payload.cityName) {
                    draft.type = MessageTypes.success;
                    draft.content = `${action.payload.cityName} ${MESSAGES.addToFavorite}`;
                    draft.createdTime = moment().valueOf();
                }
                break;
            case ActionTypes.removeFromFavorite:
                if (action.payload.cityName) {
                    draft.type = MessageTypes.delete;
                    draft.content = `${action.payload.cityName} ${MESSAGES.removeFromFavorite}`;
                    draft.createdTime = moment().valueOf();                    
                }
                break;

            case ActionTypes.removeWeatherFromList:
                if (action.payload.cityName) {
                    draft.type = MessageTypes.delete;
                    draft.content = `${action.payload.cityName} ${MESSAGES.removeCity}`;
                    draft.createdTime = moment().valueOf();
                }
                break;

            case ActionTypes.addNewNote:
                draft.type = MessageTypes.success;
                draft.content = MESSAGES.addNote;
                draft.createdTime = moment().valueOf();
                break;
            case ActionTypes.updateNote:
                draft.type = MessageTypes.success;
                draft.content = MESSAGES.updateNote;
                draft.createdTime = moment().valueOf();
                break;
            case ActionTypes.deleteNote:
                draft.type = MessageTypes.delete;
                draft.content = MESSAGES.deleteNote;
                draft.createdTime = moment().valueOf();
                break;

            default:
        }
    });
}