import { ActionTypes } from 'actions';
import {
    initGeolocation,
    updateGeolocation,
    updateGeolocationFailed,
    fetchLocationWeather,
    fetchLocationWeatherSuccess,
    fetchLocationWeatherFailed,
} from '../geolocationActions';
import { samplePosition, sampleWeatherData } from 'tests';

const id = Object.keys(sampleWeatherData)[0];
const data = sampleWeatherData[id];

describe('actions/geolocationActions', () => {
    describe('should return correct action for:', () => {
        it('initGeolocation', () => {
            expect(initGeolocation()).toEqual({
                type: ActionTypes.initGeolocation
            });
        });

        it('updateGeolocation', () => {
            expect(updateGeolocation(samplePosition)).toEqual({
                type: ActionTypes.updateGeolocation,
                payload: samplePosition
            });
        });

        it('updateGeolocationFailed', () => {
            const error = new Error('error');
            expect(updateGeolocationFailed(error)).toEqual({
                type: ActionTypes.updateGeolocationFailed,
                payload: error
            });
        });

        it('fetchLocationWeather', () => {
            expect(fetchLocationWeather()).toEqual({
                type: ActionTypes.fetchLocationWeather
            });
        });

        it('fetchLocationWeatherSuccess', () => {
            expect(fetchLocationWeatherSuccess(data)).toEqual({
                type: ActionTypes.fetchLocationWeatherSuccess,
                payload: data
            });
        });

        it('fetchLocationWeatherFailed', () => {
            expect(fetchLocationWeatherFailed()).toEqual({
                type: ActionTypes.fetchLocationWeatherFailed
            });
        });
    });
});