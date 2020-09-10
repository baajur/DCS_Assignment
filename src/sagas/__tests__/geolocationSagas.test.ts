import { all, put, call, takeEvery, select, take } from 'redux-saga/effects';
import {
    geolocationSagas,
    initGeolocation,
    fetchLocationWeather,
    createGeolocationChannel,
} from '../geolocationSagas';
import {
    ActionTypes,
    updateGeolocation,
    addNewMessage,
    updateGeolocationFailed,
    fetchLocationWeatherSuccess,
    fetchLocationWeatherFailed,
} from 'actions';
import { MESSAGES, MessageTypes } from 'configs';
import { fetchWeatherByCoords } from 'apis';
import { samplePosition, sampleSearchResults } from 'tests';

const channel = createGeolocationChannel();

describe('geolocationSagas', () => {
    let generator: Generator;

    it('masterSagas', () => {
        generator = geolocationSagas();
        expect(generator.next().value).toEqual(
            all([
                takeEvery(
                    ActionTypes.initGeolocation,
                    initGeolocation
                ),
                takeEvery(
                    ActionTypes.fetchLocationWeather,
                    fetchLocationWeather,
                )
            ])
        )
    });

    it('initGeolocation', () => {
        generator = initGeolocation();

        expect(generator.next().value).toEqual(call(createGeolocationChannel));

        expect(generator.next(channel).value).toEqual(
            take(channel)
        );

        expect(generator.next({  
            position: samplePosition
        }).value).toEqual(
            put(updateGeolocation(samplePosition))
        );

        expect(generator.next().value).toEqual(take(channel));

        expect(generator.next({
            error: new Error(MESSAGES.geolocationNotSupported)
        }).value).toEqual(
            put(addNewMessage(
                MessageTypes.error,
                MESSAGES.geolocationNotSupported
            ))
        );

        expect(generator.next().value).toEqual(
            put(updateGeolocationFailed(new Error(MESSAGES.geolocationNotSupported)))
        );

        expect(generator.next().value).toEqual(take(channel));

        expect(generator.next({
            error: new Error('test')
        }).value).toEqual(
            put(updateGeolocationFailed(new Error('test')))
        );
    });

    describe('fetchLocationWeather', () => {
        beforeEach(() => {
            generator = fetchLocationWeather();
            expect(generator.next().value).toEqual(select());
        });

        it('should work when there is ERROR', () => {
            expect(generator.throw(1).value).toEqual(
                put(fetchLocationWeatherFailed())
            );
        });

        describe('should work when there is NO ERROR', () => {
            it('and when no latitude', () => {
                expect(generator.next({
                    geolocation: {
                        latitude: null,
                        longitude: 1000
                    }
                }).done).toBeTruthy();
            });

            it('and when no longitude', () => {
                expect(generator.next({
                    geolocation: {
                        latitude: 1000,
                        longitude: null
                    }
                }).done).toBeTruthy();
            });

            it('and when coords are available', () => {
                expect(generator.next({
                    geolocation: {
                        latitude: 1000,
                        longitude: 1001
                    }
                }).value).toEqual(
                    call(fetchWeatherByCoords, 1000, 1001)
                );

                expect(generator.next(
                    sampleSearchResults.singapore.data
                ).value).toEqual(
                    put(fetchLocationWeatherSuccess(
                        sampleSearchResults.singapore.data
                    ))
                );
            });
        });
    });
});