import qs from 'querystringify';
import {
    setFetchingTimer,
    createOpenWeatherURLWithCity,
    createOpenWeatherURLWithCityId,
    createOpenWeatherURLWithCoords,
    getOpenWeatherIconURL,
} from '../index';
import {
    MIN_FETCHING_TIME,
    OPEN_WEATHER_URL,
    OPEN_WEATHER_KEY,
    OPEN_WEATHER_IMAGE_URL,
} from 'configs';

jest.mock('moment', () => () => ({
    valueOf: () => 1
}));

describe('helpers', () => {
    it('setFetchingTimer correctly', () => {
        const timer = setFetchingTimer();
        expect(timer()).toEqual(MIN_FETCHING_TIME);
    });

    it('createOpenWeatherURLWithCity correctly', () => {
        const url = createOpenWeatherURLWithCity('a');
        expect(url).toEqual(
            `${OPEN_WEATHER_URL}?${qs.stringify({
                appid: OPEN_WEATHER_KEY,
                q: 'a'
            })}`
        )
    });

    it('createOpenWeatherURLWithCoords correctly', () => {
        const url = createOpenWeatherURLWithCoords(1, 2);
        expect(url).toEqual(
            `${OPEN_WEATHER_URL}?${qs.stringify({
                appid: OPEN_WEATHER_KEY,
                lat: 1,
                lon: 2
            })}`
        )
    });

    it('createOpenWeatherURLWithCityId correctly', () => {
        const url = createOpenWeatherURLWithCityId(123);
        expect(url).toEqual(
            `${OPEN_WEATHER_URL}?${qs.stringify({
                appid: OPEN_WEATHER_KEY,
                id: 123
            })}`           
        )
    });

    it('getOpenWeatherIconURL correctly', () => {
        expect(getOpenWeatherIconURL('a')).toEqual(
            `${OPEN_WEATHER_IMAGE_URL}/a@2x.png`
        );
    })
});
