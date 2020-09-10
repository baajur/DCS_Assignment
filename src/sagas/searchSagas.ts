import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import * as apis from 'apis';
import {
    searchByCitySuccess,
    searchByCityUnchanged,
    searchByCityFailed,
    fetchWeatherListSuccess,
    addToFavorite,
    ActionTypes,
    SearchByCity,
    AddSearchToWeatherList,
} from 'actions';
import { StoreState } from 'reducers';
import { SEARCH_RESULT_EXPIRY_IN_MS } from 'configs';

export const searchSagas = function* () {
    yield all([
        takeEvery(
            ActionTypes.searchByCity,
            searchByCity
        ),
        takeEvery(
            ActionTypes.addSearchToWeatherList,
            addSearchToWeatherList
        )
    ])
}

export function* searchByCity({ payload: searchTerm }: SearchByCity) {
    try {
        const {
            search: { results }
        }: StoreState = yield select();

        const storedResult = results[searchTerm];
        const now = new Date().getTime();
        
        if (
            storedResult &&
            storedResult.timeStamp >= now - SEARCH_RESULT_EXPIRY_IN_MS 
        ) {
            yield put(searchByCityUnchanged(searchTerm));
            return;
        }

        const { data }: apis.FetchWeatherByCitiesResult = yield call(apis.fetchWeatherByCities, searchTerm);
        const result = data && data[0] ? data[0] : null;

        yield put(searchByCitySuccess(searchTerm, result));
    } catch(error) {
        yield put(searchByCityFailed(searchTerm));
    }
}

export function* addSearchToWeatherList({
    payload: searchTerm
}: AddSearchToWeatherList) {
    const { search }: StoreState = yield select();
    const { results } = search;
    const result = results[searchTerm];

    if (result && result.data) {
        yield put(fetchWeatherListSuccess([result.data]));
        yield put(addToFavorite(result.data.id, result.data.name));
    }
}