import { all } from 'redux-saga/effects';
import { weatherSagas } from './weatherSagas';
import { searchSagas } from './searchSagas';
import { geolocationSagas } from './geolocationSagas';

export const sagas = function* () {
    yield all([
        weatherSagas(),
        searchSagas(),
        geolocationSagas(),
    ]);
};