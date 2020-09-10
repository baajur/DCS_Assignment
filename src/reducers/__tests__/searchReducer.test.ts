import { searchReducer, INITIAL_STATE } from '../searchReducer';
import { ActionTypes } from 'actions';
import { sampleWeatherData } from 'tests';

const firstId = Object.keys(sampleWeatherData)[0] as keyof typeof sampleWeatherData;
const firstData = sampleWeatherData[firstId];

jest.mock('moment', () => () => ({
    valueOf: () => 1
}));

describe('reducers/searchReducer', () => {
    it('should return INITIAL_STATE by default', () => {
        expect(searchReducer(undefined, {
            type: ActionTypes.testOnly
        })).toEqual(INITIAL_STATE)
    });

    describe('should return correct state for:', () => {
        it('resetSearch', () => {
            const state = {
                ...INITIAL_STATE,
                currentSearchTerm: 'not empty'
            };

            expect(searchReducer(
                state,
                {
                    type: ActionTypes.resetSearch
                }
            )).toEqual({
                ...INITIAL_STATE,
            })
        });

        it('searchByCity', () => {
            expect(searchReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.searchByCity,
                    payload: '11'
                }
            )).toEqual({
                ...INITIAL_STATE,
                currentSearchTerm: '11',
                loading: true,
                error: false
            });
        });

        it('searchByCityUnchanged with same search term', () => {
            const state = {
                ...INITIAL_STATE,
                currentSearchTerm: '111',
                loading: true,
                error: true,
            };
            expect(searchReducer(
                state,
                {
                    type: ActionTypes.searchByCityUnchanged,
                    payload: '111'
                }
            )).toEqual({
                ...state,
                loading: false,
                error: false
            });
        });

        it('searchByCityUnchanged with different search term', () => {
            const state = {
                ...INITIAL_STATE,
                currentSearchTerm: '111',
                loading: true,
                error: true,
            };
            expect(searchReducer(
                state,
                {
                    type: ActionTypes.searchByCityUnchanged,
                    payload: '222'
                }
            )).toEqual({
                ...state
            });
        });

        it('searchByCitySuccess with same search term', () => {
            const state = {
                ...INITIAL_STATE,
                currentSearchTerm: 'si',
                loading: true,
                error: true,
            };           

            expect(searchReducer(
                state,
                {
                    type: ActionTypes.searchByCitySuccess,
                    payload: {
                        searchTerm: 'si',
                        data: firstData
                    }
                }
            )).toEqual({
                ...state,
                loading: false,
                error: false,
                results: {
                    si: {
                        data: firstData,
                        timeStamp: 1
                    }
                }
            });
        });

        it('searchByCitySuccess with different search term', () => {
            const state = {
                ...INITIAL_STATE,
                currentSearchTerm: 'si',
                loading: true,
                error: true,
            };           

            expect(searchReducer(
                state,
                {
                    type: ActionTypes.searchByCitySuccess,
                    payload: {
                        searchTerm: 'kk',
                        data: firstData
                    }
                }
            )).toEqual({
                ...state,
                results: {
                    kk: {
                        data: firstData,
                        timeStamp: 1
                    }
                }
            });
        });

        it('searchByCityFailed with same search term', () => {
            const state = {
                ...INITIAL_STATE,
                currentSearchTerm: 'si',
                loading: true,
                error: false,
            };

            expect(searchReducer(
                state,
                {
                    type: ActionTypes.searchByCityFailed,
                    payload: 'si'
                }
            )).toEqual({
                ...state,
                loading: false,
                error: true
            });
        })

        it('searchByCityFailed with different search term', () => {
            const state = {
                ...INITIAL_STATE,
                currentSearchTerm: 'si',
                loading: true,
                error: false,
            };

            expect(searchReducer(
                state,
                {
                    type: ActionTypes.searchByCityFailed,
                    payload: 'kk'
                }
            )).toEqual({
                ...state,
            });
        })
    });
});