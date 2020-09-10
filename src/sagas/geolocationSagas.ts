import { all, takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import {
    ActionTypes,
    updateGeolocation,
    updateGeolocationFailed,
    fetchLocationWeatherSuccess,
    fetchLocationWeatherFailed,
    addNewMessage,
} from 'actions';
import { Geolocation, GeolocationCallbackData } from 'services';
import * as apis from 'apis';
import { StoreState } from 'reducers';
import { TypeOpenWeatherData } from 'apis';
import { MESSAGES, MessageTypes } from 'configs';

export const geolocationSagas = function* () {
    yield all([
        takeEvery(
            ActionTypes.initGeolocation,
            initGeolocation
        ),
        takeEvery(
            ActionTypes.fetchLocationWeather,
            fetchLocationWeather,
        )
    ])
}

export function* initGeolocation() {
    const channel = yield call(createGeolocationChannel);

    while (true) {
        const data: GeolocationCallbackData = yield take(channel);
    
        if (data.position) {
            yield put(updateGeolocation(data.position));
        }
        
        if (data.error) {
            if (data.error.message === MESSAGES.geolocationNotSupported) {
                yield put(addNewMessage(
                    MessageTypes.error,
                    data.error.message
                ));
            }
            yield put(updateGeolocationFailed(data.error));
        }
    }
}

export function* fetchLocationWeather() {
    try {
        const {
            geolocation: { latitude, longitude }
        }: StoreState = yield select();

        if (latitude === null || longitude === null) return;

        const data: TypeOpenWeatherData = yield call(
            apis.fetchWeatherByCoords,
            latitude,
            longitude
        );

        yield put(fetchLocationWeatherSuccess(data));
    } catch(error) {
        yield put(fetchLocationWeatherFailed());
    }
}

export function createGeolocationChannel(): EventChannel<
    GeolocationCallbackData
> {
    const geolocation = Geolocation.getInstance();
    return eventChannel<GeolocationCallbackData>(
        emitter => {
            geolocation.registerCallback(emitter);
            geolocation.init();
            return () => {};
        }
    );
};

