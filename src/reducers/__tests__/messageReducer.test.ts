import { ActionTypes } from 'actions';
import { messageReducer, INITIAL_STATE } from '../messageReducer';
import { MessageTypes, MESSAGES } from 'configs';

jest.mock('moment', () => () => ({
    valueOf: () => 1
}));

describe('reducers/messageReducer', () => {
    it('should return INITIAL STATE by default', () => {
        expect(messageReducer(
            undefined,
            {
                type: ActionTypes.testOnly
            }
        )).toEqual(INITIAL_STATE);
    });

    describe('should return correct state for:', () => {
        it('addNewMessage with string', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.addNewMessage,
                    payload: {
                        content: 'message',
                        type: MessageTypes.info
                    }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.info,
                content: 'message',
                createdTime: 1
            })
        });

        it('addNewMessage with error', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.addNewMessage,
                    payload: {
                        content: new Error('message'),
                        type: MessageTypes.info
                    }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.info,
                content: 'message',
                createdTime: 1
            })
        });

        it('addToFavorite', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.addToFavorite,
                    payload: { cityId: 1, cityName: 'cityA' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.success,
                content: `cityA ${MESSAGES.addToFavorite}`,
                createdTime: 1
            });
        });

        it('addToFavorite with no cityName', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.addToFavorite,
                    payload: { cityId: 1 }
                }
            )).toEqual({
                ...INITIAL_STATE,
            });
        });

        it('removeFromFavorite', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.removeFromFavorite,
                    payload: { cityId: 1, cityName: 'aa' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.delete,
                content: `aa ${MESSAGES.removeFromFavorite}`,
                createdTime: 1
            });
        });

        it('removeFromFavorite with no city name', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.removeFromFavorite,
                    payload: { cityId: 1 }
                }
            )).toEqual({
                ...INITIAL_STATE,
            });
        });

        it('removeWeatherFromList', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.removeWeatherFromList,
                    payload: { cityId: 1, cityName: 'cityB' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.delete,
                content: `cityB ${MESSAGES.removeCity}`,
                createdTime: 1
            })
        });
        
        it('removeWeatherFromList with no city name', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.removeWeatherFromList,
                    payload: { cityId: 1 }
                }
            )).toEqual({
                ...INITIAL_STATE,
            });
        });

        it('addNewNote', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.addNewNote,
                    payload: { cityId: 1, content: '' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.success,
                content: MESSAGES.addNote,
                createdTime: 1
            });
        });
        
        it('updateNote', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.updateNote,
                    payload: { cityId: 1, noteId: '2', content: '' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.success,
                content: MESSAGES.updateNote,
                createdTime: 1
            });
        });

        it('deleteNote', () => {
            expect(messageReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.deleteNote,
                    payload: { cityId: 1, noteId: '2' }
                }
            )).toEqual({
                ...INITIAL_STATE,
                type: MessageTypes.delete,
                content: MESSAGES.deleteNote,
                createdTime: 1     
            })
        });
    });
});