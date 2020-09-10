import moment from 'moment';
import produce from 'immer';
import { ActionTypes, Action } from 'actions';
import { TypeNote } from 'apis';

export interface NoteReducer {
    data: {
        [cityId: string]: {
            [noteId: string]: TypeNote;
        }
    }
};

export const INITIAL_STATE: NoteReducer = {
    data: {}
};

export const noteReducer = (state = INITIAL_STATE, action: Action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ActionTypes.addNewNote:
                const now = moment().valueOf();

                if (!draft.data[action.payload.cityId]) {
                    draft.data[action.payload.cityId] = {};
                }
                
                draft.data[action.payload.cityId][now] = {
                    id: `${now}`,
                    content: action.payload.content,
                    createdTime: now,
                    updatedTime: now,
                }
                break;

            case ActionTypes.updateNote:
                const noteToBeUpdated = draft.data
                    [action.payload.cityId]
                    [action.payload.noteId];
                if (noteToBeUpdated.content !== action.payload.content) {
                    noteToBeUpdated.content = action.payload.content;
                    noteToBeUpdated.updatedTime = moment().valueOf();
                }
                break;

            case ActionTypes.deleteNote:
                delete draft.data
                    [action.payload.cityId]
                    [action.payload.noteId];
                break;

            default:
        }
    });
}