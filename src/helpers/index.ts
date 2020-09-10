import qs from 'querystringify';
import moment from 'moment';
import {
    MIN_FETCHING_TIME,
    OPEN_WEATHER_KEY,
    OPEN_WEATHER_URL,
    OPEN_WEATHER_IMAGE_URL,
} from 'configs';

export const setFetchingTimer = function(): () => number {
    const start = moment().valueOf();

    return function(): number {
        const lapsed = moment().valueOf() - start;
        return Math.max(MIN_FETCHING_TIME - lapsed, 0);
    }
}

export const createOpenWeatherURLWithCity = (city: string): string => {
    const query = qs.stringify({
        appid: OPEN_WEATHER_KEY,
        q: city
    });
    return `${OPEN_WEATHER_URL}?${query}`;
}

export const createOpenWeatherURLWithCoords = (lat: number, lon: number): string => {
    const query = qs.stringify({
        appid: OPEN_WEATHER_KEY,
        lat,
        lon
    });
    return `${OPEN_WEATHER_URL}?${query}`;
}

export const createOpenWeatherURLWithCityId = (cityId: number): string => {
    const query = qs.stringify({
        appid: OPEN_WEATHER_KEY,
        id: cityId
    });
    return `${OPEN_WEATHER_URL}?${query}`;
}

export const getOpenWeatherIconURL = (iconCode: string): string => {
    return `${OPEN_WEATHER_IMAGE_URL}/${iconCode}@2x.png`;
}