import { all, takeEvery, call, put, delay, select } from 'redux-saga/effects';
import { 
    MessageTypes,
    DEFAULT_CITIES,
    MESSAGES,
} from 'configs';
import * as apis from 'apis';
import * as helpers from 'helpers';
import {
    ActionTypes,
    fetchWeatherListSuccess,
    fetchWeatherListFailed,
    fetchWeatherDetailSuccess,
    fetchWeatherDetailFailed,
    addNewMessage,
    FetchWeatherDetail,
} from 'actions';
import { StoreState } from 'reducers';

export const weatherSagas = function* () {
    yield all([
        takeEvery(
            ActionTypes.fetchWeatherList,
            fetchWeatherList
        ),
        takeEvery(
            ActionTypes.fetchWeatherDetail,
            fetchWeatherDetail
        ),
    ]);
}

export function* fetchWeatherList() {
    const timer: () => number = yield call(helpers.setFetchingTimer);

    try {
        const { weather }: StoreState = yield select();
        const currentCities = Object.values(weather.data).map(data => data.name);
        const toBeFetchedCities = currentCities.length ? currentCities : DEFAULT_CITIES;

        const { data, errors }: apis.FetchWeatherByCitiesResult = yield call(
            apis.fetchWeatherByCities,
            toBeFetchedCities
        );

        yield delay(timer());

        if (data.length !== toBeFetchedCities.length) {
            if (!data.length) {
                yield put(addNewMessage(
                    MessageTypes.error,
                    new Error(MESSAGES.noWeatherDataAvailable)
                ));
            } else if (errors.length) {
                const citiesString = errors
                    .map(e => `"${e.city}"`)
                    .join(', ');

                yield put(addNewMessage(
                    MessageTypes.error,
                    new Error(
                        `${MESSAGES.notAllWeatherDataAvailable} ${citiesString}`
                    )
                ));
            }
        }

        yield put(fetchWeatherListSuccess(data));
    } catch(error) {
        yield delay(timer());
        yield put(fetchWeatherListFailed());
    }
}

export function* fetchWeatherDetail({ payload: cityId }: FetchWeatherDetail) {
    const timer: () => number = yield call(helpers.setFetchingTimer);

    try {
        const data: apis.TypeOpenWeatherData = yield call(
            apis.fetchWeatherByCityId,
            cityId
        );
 
        yield delay(timer());
        yield put(fetchWeatherDetailSuccess(data));
    } catch(error) {
        yield delay(timer());
        yield put(fetchWeatherDetailFailed());
    }
}