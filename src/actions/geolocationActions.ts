import { ActionTypes } from './types';
import { TypeOpenWeatherData } from 'apis';

// initGeolocation

export interface InitGeolocation {
    type: ActionTypes.initGeolocation
}

export const initGeolocation = (): InitGeolocation => ({
    type: ActionTypes.initGeolocation
});


// updateGeolocation

export interface UpdateGeolocation {
    type: ActionTypes.updateGeolocation,
    payload: Position
}

export const updateGeolocation = (
    position: Position
): UpdateGeolocation => ({
    type: ActionTypes.updateGeolocation,
    payload: position
});


// updateGeolocationFailed

export interface UpdateGeolocationFailed {
    type: ActionTypes.updateGeolocationFailed,
    payload: PositionError | Error
}

export const updateGeolocationFailed = (
    error: PositionError | Error
): UpdateGeolocationFailed => ({
    type: ActionTypes.updateGeolocationFailed,
    payload: error
});



// fetchLocationWeather

export interface FetchLocationWeather {
    type: ActionTypes.fetchLocationWeather
}

export const fetchLocationWeather = (): FetchLocationWeather => ({
    type: ActionTypes.fetchLocationWeather
});


// fetchLocationWeatherSuccess

export interface FetchLocationWeatherSuccess {
    type: ActionTypes.fetchLocationWeatherSuccess
    payload: TypeOpenWeatherData
};

export const fetchLocationWeatherSuccess = (
    data: TypeOpenWeatherData
): FetchLocationWeatherSuccess => ({
    type: ActionTypes.fetchLocationWeatherSuccess,
    payload: data
});


// fetchLocationWeatherFailed

export interface FetchLocationWeatherFailed {
    type: ActionTypes.fetchLocationWeatherFailed,
};

export const fetchLocationWeatherFailed = (): FetchLocationWeatherFailed => ({
    type: ActionTypes.fetchLocationWeatherFailed
});