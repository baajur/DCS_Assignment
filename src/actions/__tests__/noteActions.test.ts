import { ActionTypes } from 'actions';
import {
    addNewNote,
    updateNote,
    deleteNote,
} from '../noteActions';

describe('actions/noteActions', () => {
    describe('should return correct action for:', () => {
        it('addNewNote', () => {
            expect(addNewNote(1, 'a')).toEqual({
                type: ActionTypes.addNewNote,
                payload: {
                    cityId: 1,
                    content: 'a'
                }
            });
        });

        it('updateNote', () => {
            expect(updateNote(1, '1', 'a')).toEqual({
                type: ActionTypes.updateNote,
                payload: {
                    cityId: 1,
                    noteId: '1',
                    content: 'a'
                }
            });
        });

        it('deleteNote', () => {
            expect(deleteNote(1, '1')).toEqual({
                type: ActionTypes.deleteNote,
                payload: {
                    cityId: 1,
                    noteId: '1'
                }
            });
        });
    });
});