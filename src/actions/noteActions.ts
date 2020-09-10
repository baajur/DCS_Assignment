import { ActionTypes } from './types';

// addNewNote

export interface AddNewNote {
    type: ActionTypes.addNewNote;
    payload: {
        cityId: number;
        content: string;
    };
}

export const addNewNote = (
    cityId: number,
    content: string
): AddNewNote => ({
    type: ActionTypes.addNewNote,
    payload: {
        cityId,
        content,
    }
});


// updateNote

export interface UpdateNote {
    type: ActionTypes.updateNote;
    payload: {
        cityId: number;
        noteId: string;
        content: string;
    }
}

export const updateNote = (
    cityId: number,
    noteId: string,
    content: string
): UpdateNote => ({
    type: ActionTypes.updateNote,
    payload: {
        cityId,
        noteId,
        content
    }
});


// deleteNote

export interface DeleteNote {
    type: ActionTypes.deleteNote;
    payload: {
        cityId: number;
        noteId: string;
    }
}

export const deleteNote = (
    cityId: number,
    noteId: string
): DeleteNote => ({
    type: ActionTypes.deleteNote,
    payload: {
        cityId,
        noteId
    }
});