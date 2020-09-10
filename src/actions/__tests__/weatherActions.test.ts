import { ActionTypes } from 'actions';
import {
    fetchWeatherList,
    fetchWeatherListSuccess,
    fetchWeatherListFailed,
    removeWeatherFromList,
    fetchWeatherDetail,
    fetchWeatherDetailSuccess,
    fetchWeatherDetailFailed,
} from '../weatherActions';

describe('actions/weatherActions', () => {
    describe('should return correct action for:', () => {
        it('fetchWeatherList', () => {
            expect(fetchWeatherList()).toEqual({
                type: ActionTypes.fetchWeatherList,
            });
        });

        it('fetchWeatherListSuccess', () => {
            expect(fetchWeatherListSuccess([])).toEqual({
                type: ActionTypes.fetchWeatherListSuccess,
                payload: []
            });
        });

        it('fetchWeatherListFailed', () => {
            expect(fetchWeatherListFailed()).toEqual({
                type: ActionTypes.fetchWeatherListFailed
            });
        });

        it('removeWeatherFromList', () => {
            expect(removeWeatherFromList(1, 'a')).toEqual({
                type: ActionTypes.removeWeatherFromList,
                payload: {
                    cityId: 1,
                    cityName: 'a'
                }
            });
        });

        it('fetchWeatherDetail', () => {
            expect(fetchWeatherDetail(1)).toEqual({
                type: ActionTypes.fetchWeatherDetail,
                payload: 1
            });
        });

        it('fetchWeatherDetailSuccess', () => {
            expect(fetchWeatherDetailSuccess(null)).toEqual({
                type: ActionTypes.fetchWeatherDetailSuccess,
                payload: null
            });
        });

        it('fetchWeatherDetailFailed', () => {
            expect(fetchWeatherDetailFailed()).toEqual({
                type: ActionTypes.fetchWeatherDetailFailed
            })
        });
    });
});