import { ActionTypes } from 'actions';
import {
    searchByCity,
    searchByCityUnchanged,
    searchByCitySuccess,
    searchByCityFailed,
    addSearchToWeatherList,
    resetSearch,
} from '../searchActions';

describe('actions/searchActions', () => {
    describe('should return correct action for:', () => {
        it('searchByCity', () => {
            expect(searchByCity('a')).toEqual({
                type: ActionTypes.searchByCity,
                payload: 'a'
            });
        });

        it('searchByCityUnchanged', () => {
            expect(searchByCityUnchanged('a')).toEqual({
                type: ActionTypes.searchByCityUnchanged,
                payload: 'a'
            });
        });

        it('searchByCitySuccess', () => {
            expect(searchByCitySuccess('a', null)).toEqual({
                type: ActionTypes.searchByCitySuccess,
                payload: {
                    searchTerm: 'a',
                    data: null
                }
            });
        });

        it('searchByCityFailed', () => {
            expect(searchByCityFailed('a')).toEqual({
                type: ActionTypes.searchByCityFailed,
                payload: 'a'
            });
        });

        it('addSearchToWeatherList', () => {
            expect(addSearchToWeatherList('a')).toEqual({
                type: ActionTypes.addSearchToWeatherList,
                payload: 'a'
            });
        });

        it('resetSearch', () => {
            expect(resetSearch()).toEqual({
                type: ActionTypes.resetSearch
            });
        });
    });
});