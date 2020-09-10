import { ActionTypes } from 'actions';
import { geolocationReducer, INITIAL_STATE } from '../geolocationReducer';
import { samplePosition, sampleWeatherData  } from 'tests';

const id = Object.keys(sampleWeatherData)[0];
const data = sampleWeatherData[id];

describe('reducers/geolocationReducer', () => {
    it('should return INITIAL STATE by default', () => {
        expect(geolocationReducer(
            undefined,
            {
                type: ActionTypes.testOnly
            }
        )).toEqual(INITIAL_STATE)
    });

    describe('should return correct state for:', () => {
        it('updateGeolocation', () => {
            expect(geolocationReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.updateGeolocation,
                    payload: samplePosition
                }
            )).toEqual({
                ...INITIAL_STATE,
                granted: true,
                latitude: samplePosition.coords.latitude,
                longitude: samplePosition.coords.longitude,
            })
        });

        it('updateGeolocationFailed', () => {
            expect(geolocationReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.updateGeolocationFailed,
                    payload: new Error()
                }
            )).toEqual({
                ...INITIAL_STATE,
                granted: false,
                latitude: null,
            })
        });

        it('fetchLocationWeather', () => {
            expect(geolocationReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchLocationWeather
                }
            )).toEqual({
                ...INITIAL_STATE,
                loading: true,
                error: false
            });
        });

        it('fetchLocationWeatherSuccess', () => {
            expect(geolocationReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchLocationWeatherSuccess,
                    payload: data
                }
            )).toEqual({
                ...INITIAL_STATE,
                loading: false,
                error: false,
                weatherData: data
            })
        });

        it('fetchLocationWeatherFailed', () => {
            expect(geolocationReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchLocationWeatherFailed
                }
            )).toEqual({
                ...INITIAL_STATE,
                loading: false,
                error: true
            })
        });
    });
});