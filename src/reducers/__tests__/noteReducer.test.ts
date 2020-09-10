import { ActionTypes } from 'actions';
import { noteReducer, INITIAL_STATE } from '../noteReducers';

jest.mock('moment', () => () => ({
    valueOf: () => 1
}));

describe('reducers/noteReducer', () => {
    it('should return INITIAL STATE by default', () => {
        expect(noteReducer(
            undefined,
            {
                type: ActionTypes.testOnly
            }
        )).toEqual(INITIAL_STATE);
    });

    describe('should return correc state for:', () => {
        it('addNewNote', () => {
            expect(noteReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.addNewNote,
                    payload: { cityId: 1, content: 'a' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                data: {
                    1: {
                        1: {
                            id: '1',
                            content: 'a',
                            createdTime: 1,
                            updatedTime: 1
                        }
                    }
                }
            });
        });

        it('addNewNote with existing cityId', () => {
            const state = {
                ...INITIAL_STATE,
                data: {
                    1: {}
                }
            }

            expect(noteReducer(
                state,
                {
                    type: ActionTypes.addNewNote,
                    payload: { cityId: 1, content: 'a' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                data: {
                    1: {
                        1: {
                            id: '1',
                            content: 'a',
                            createdTime: 1,
                            updatedTime: 1
                        }
                    }
                }
            });
        });

        it('updateNote', () => {
            const state = {
                ...INITIAL_STATE,
                data: {
                    1: {
                        1: {
                            id: '1',
                            content: 'a',
                            createdTime: 1,
                            updatedTime: 0
                        }
                    }                    
                }
            }

            expect(noteReducer(
                state,
                {
                    type: ActionTypes.updateNote,
                    payload: {
                        cityId: 1,
                        noteId: '1',
                        content: 'b'
                    }
                }
            )).toEqual({
                ...INITIAL_STATE,
                data: {
                    1: {
                        1: {
                            id: '1',
                            content: 'b',
                            createdTime: 1,
                            updatedTime: 1
                        }
                    }                    
                }                
            });
        });

        it('updateNote with same content', () => {
            const state = {
                ...INITIAL_STATE,
                data: {
                    1: {
                        1: {
                            id: '1',
                            content: 'a',
                            createdTime: 1,
                            updatedTime: 0
                        }
                    }                    
                }
            }

            expect(noteReducer(
                state,
                {
                    type: ActionTypes.updateNote,
                    payload: {
                        cityId: 1,
                        noteId: '1',
                        content: 'a'
                    }
                }
            )).toEqual(state);
        });

        it('deleteNote', () => {
            const state = {
                ...INITIAL_STATE,
                data: {
                    1: {
                        1: {
                            id: '1',
                            content: 'a',
                            createdTime: 1,
                            updatedTime: 1
                        }
                    }                    
                }
            }

            expect(noteReducer(
                state,
                {
                    type: ActionTypes.deleteNote,
                    payload: { cityId: 1, noteId: '1' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                data: {
                    1: {}
                }
            });
        });
    });
});