import _cloneDeep from 'lodash/cloneDeep';
import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import {
    searchSagas,
    searchByCity,
    addSearchToWeatherList,
} from '../searchSagas';
import {
    ActionTypes,
    searchByCityUnchanged,
    searchByCitySuccess,
    searchByCityFailed,
    fetchWeatherListSuccess,
    addToFavorite,
} from 'actions';
import {
    fetchWeatherByCities,
} from 'apis';
import { SEARCH_RESULT_EXPIRY_IN_MS } from 'configs';
import { sampleSearchResults } from 'tests';

function getResults(adjusted: number) {
    const results = _cloneDeep(sampleSearchResults);
    const keys = Object.keys(results) as Array<keyof typeof results>;

    keys.forEach(key => {
        results[key].timeStamp = new Date().getTime() - adjusted;
    });

    return results;
}

describe('sagas/searchSagas', () => {
    let generator: Generator;

    it('masterSagas', () => {
        generator = searchSagas();
        expect(generator.next().value).toEqual(
            all([
                takeEvery(
                    ActionTypes.searchByCity,
                    searchByCity
                ),
                takeEvery(
                    ActionTypes.addSearchToWeatherList,
                    addSearchToWeatherList
                )
            ])
        )
    });

    describe('searchByCity:', () => {
        beforeEach(() => {
            generator = searchByCity({
                type: ActionTypes.searchByCity,
                payload: 'singapore'
            });
            expect(generator.next().value).toEqual(select());
        });

        it('should work when there is ERROR', () => {
            expect(generator.throw(1).value).toEqual(
                put(searchByCityFailed('singapore'))
            )
        });

        it('when search result is NOT AVAILABLE IN local storage', () => {            
            expect(generator.next({
                search: { results: {} }                    
            }).value).toEqual(
                call(
                    fetchWeatherByCities,
                    'singapore'
                )
            );  
            
            expect(generator.next({
                data: [sampleSearchResults.singapore.data]
            }).value).toEqual(
                put(searchByCitySuccess(
                    'singapore',
                    sampleSearchResults.singapore.data
                ))
            )
        });

        describe('when search result is AVAILABLE in local storage:', () => {
            it('and NOT EXPIRED', () => {
                const results = getResults(0);
                expect(generator.next({
                    search: {
                        results
                    }
                }).value).toEqual(
                    put(searchByCityUnchanged('singapore'))
                );
            });

            it('and EXPIRED', () => {
                const results = getResults(SEARCH_RESULT_EXPIRY_IN_MS * 2);

                expect(generator.next({
                    search: {
                        results
                    }                    
                }).value).toEqual(
                    call(
                        fetchWeatherByCities,
                        'singapore'
                    )
                );
            });
        });
    });

    describe('addSearchToWeatherList', () => {
        beforeEach(() => {
            generator = addSearchToWeatherList({
                type: ActionTypes.addSearchToWeatherList,
                payload: 'singapore'
            });

            expect(generator.next().value).toEqual(select());
        });

        it('should work when search data is available', () => {
            expect(generator.next({
                search: {
                    results: sampleSearchResults
                }
            }).value).toEqual(
                put(fetchWeatherListSuccess([sampleSearchResults.singapore.data]))
            );

            expect(generator.next().value).toEqual(
                put(addToFavorite(
                    sampleSearchResults.singapore.data.id,
                    sampleSearchResults.singapore.data.name
                ))
            );
        });

        it('should work when data is not available', () => {
            expect(generator.next({
                search: { results: {} }
            }).done).toBeTruthy();
        });
    });
});