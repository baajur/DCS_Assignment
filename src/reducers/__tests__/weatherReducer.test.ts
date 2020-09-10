import { weatherReducer, INITIAL_STATE } from '../weatherReducer';
import { ActionTypes } from 'actions';
import { sampleWeatherData } from 'tests';

const firstId = Object.keys(sampleWeatherData)[0] as keyof typeof sampleWeatherData;

describe('reducers/weatherReducer', () => {
    it('should return INITIAL STATE by default', () => {
        expect(weatherReducer(undefined, {
            type: ActionTypes.testOnly
        })).toEqual(INITIAL_STATE);
    });

    describe('should return correct state for:', () => {
        it('fetchWeatherList', () => {
            expect(weatherReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchWeatherList,
                }
            )).toEqual({
                ...INITIAL_STATE,
                loading: true,
                error: false
            });
        });

        it('fetchWeatherListSuccess', () => {
            expect(weatherReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchWeatherListSuccess,
                    payload: Object.values(sampleWeatherData)
                }
            )).toEqual({
                ...INITIAL_STATE,
                loading: false,
                error: false,
                data: sampleWeatherData
            });
        });

        it('fetchWeatherListFailed', () => {
            expect(weatherReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchWeatherListFailed,
                }
            )).toEqual({
                ...INITIAL_STATE,
                loading: false,
                error: true
            });
        });

        it('removeWeatherFromList', () => {
            const state = {
                ...INITIAL_STATE,
                data: {
                    [firstId]: sampleWeatherData[firstId]
                }
            }

            expect(weatherReducer(
                state,
                {
                    type: ActionTypes.removeWeatherFromList,
                    payload: { cityId: Number(firstId) }
                }
            )).toEqual(INITIAL_STATE);
        });

        it('fetchWeatherDetail', () => {
            expect(weatherReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchWeatherDetail,
                    payload: 1
                }
            )).toEqual({
                ...INITIAL_STATE,
                detailLoading: true,
                detailError: false
            });
        });

        it('fetchWeatherDetailSuccess', () => {
            expect(weatherReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchWeatherDetailSuccess,
                    payload: sampleWeatherData[firstId]
                }
            )).toEqual({
                ...INITIAL_STATE,
                detailLoading: false,
                detailError: false,
                data: {
                    [firstId]: sampleWeatherData[firstId]
                }
            });
        });

        it('fetchWeatherDetailSuccess with no data', () => {
            expect(weatherReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchWeatherDetailSuccess,
                    payload: null
                }
            )).toEqual({
                ...INITIAL_STATE,
                detailLoading: false,
                detailError: false,
            });
        });

        it('fetchWeatherDetailFailed', () => {
            expect(weatherReducer(
                INITIAL_STATE,
                {
                    type: ActionTypes.fetchWeatherDetailFailed,
                }
            )).toEqual({
                ...INITIAL_STATE,
                detailLoading: false,
                detailError: true
            });
        });
    });
});