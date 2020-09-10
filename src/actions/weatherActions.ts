import { ActionTypes } from './types';
import { TypeOpenWeatherData } from 'apis';

// fetchWeatherList

export interface FetchWeatherList {
    type: ActionTypes.fetchWeatherList
}

export const fetchWeatherList = (): FetchWeatherList => ({
    type: ActionTypes.fetchWeatherList
});


// fetchWeatherListSuccess

export interface FetchWeatherListSuccess {
    type: ActionTypes.fetchWeatherListSuccess,
    payload: TypeOpenWeatherData[],
}

export const fetchWeatherListSuccess = (
    data: TypeOpenWeatherData[]
): FetchWeatherListSuccess => ({
    type: ActionTypes.fetchWeatherListSuccess,
    payload: data
});

// fetchWeatherListError

export interface FetchWeatherListFailed {
    type: ActionTypes.fetchWeatherListFailed
}

export const fetchWeatherListFailed = (): FetchWeatherListFailed => ({
    type: ActionTypes.fetchWeatherListFailed
});

// removeWeather

export interface RemoveWeatherFromList {
    type: ActionTypes.removeWeatherFromList;
    payload: {
        cityId: number,
        cityName?: string,
    };
};

export const removeWeatherFromList = (
    cityId: number,
    cityName?: string,
): RemoveWeatherFromList => ({
    type: ActionTypes.removeWeatherFromList,
    payload: {
        cityId,
        cityName
    }
});



// fetchWeatherDetail

export interface FetchWeatherDetail {
    type: ActionTypes.fetchWeatherDetail,
    payload: number
}

export const fetchWeatherDetail = (
    cityId: number
): FetchWeatherDetail => ({
    type: ActionTypes.fetchWeatherDetail,
    payload: cityId
});

// fetchWeatherDetailSuccess

export interface FetchWeatherDetailSuccess {
    type: ActionTypes.fetchWeatherDetailSuccess,
    payload: TypeOpenWeatherData | null
};

export const fetchWeatherDetailSuccess = (
    data: TypeOpenWeatherData | null
): FetchWeatherDetailSuccess => ({
    type: ActionTypes.fetchWeatherDetailSuccess,
    payload: data
});

// fetchWeatherDetailFailed

export interface FetchWeatherDetailFailed {
    type: ActionTypes.fetchWeatherDetailFailed
}

export const fetchWeatherDetailFailed = (): FetchWeatherDetailFailed => ({
    type: ActionTypes.fetchWeatherDetailFailed
});
