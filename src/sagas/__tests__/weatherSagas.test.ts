import { call, put, select, delay, all, takeEvery } from 'redux-saga/effects';
import {
    weatherSagas,
    fetchWeatherList,
    fetchWeatherDetail,
} from '../weatherSagas';
import { setFetchingTimer } from 'helpers';
import {
    fetchWeatherByCities,
    fetchWeatherByCityId,
} from 'apis';
import {
    DEFAULT_CITIES,
    MessageTypes,
    MESSAGES,
} from 'configs';
import {
    ActionTypes,
    fetchWeatherListSuccess,
    fetchWeatherListFailed,
    fetchWeatherDetailSuccess,
    fetchWeatherDetailFailed,
    addNewMessage,
} from 'actions';
import { sampleWeatherData } from 'tests';

const fakeTimer = () => 1;
const id = Object.keys(sampleWeatherData)[0] as keyof typeof sampleWeatherData;
const data = sampleWeatherData[id];

describe('sagas/weatherSagas', () => {
    let generator: Generator;

    it('master sagas:', () => {
        generator = weatherSagas();
        expect(generator.next().value).toEqual(
            all([
                takeEvery(
                    ActionTypes.fetchWeatherList,
                    fetchWeatherList
                ),
                takeEvery(
                    ActionTypes.fetchWeatherDetail,
                    fetchWeatherDetail
                )
            ])
        );
    });

    describe('fetchWeatherList:', () => {
        beforeEach(() => {
            generator = fetchWeatherList();

            expect(generator.next().value).toEqual(
                call(setFetchingTimer)
            );

            expect(generator.next(fakeTimer).value).toEqual(
                select()
            );
        });

        it('should work when HAVING error', () => {
            expect(generator.throw(1).value).toEqual(
                delay(fakeTimer())
            );

            expect(generator.next().value).toEqual(
                put(fetchWeatherListFailed())
            );
        });

        describe('work correctly when NO error and saved cities area available:', () => {
            it('when saved cities are NOT available', () => {
                expect(generator.next({ weather: { data: {} } }).value).toEqual(
                    call(
                        fetchWeatherByCities,
                        DEFAULT_CITIES,
                    )
                );
            });

            describe('when saved cities are available:', () => {
                beforeEach(() => {
                    expect(generator.next({
                        weather: {
                            data: sampleWeatherData
                        }
                    }).value).toEqual(
                        call(
                            fetchWeatherByCities,
                            Object.values(sampleWeatherData).map(w => w.name)
                        )
                    );
                });

                it('and weathers are successfully fetched', () => {
                    expect(
                        generator.next({
                            data: Object.values(sampleWeatherData)
                        }).value
                    ).toEqual(delay(fakeTimer()));

                    expect(generator.next().value).toEqual(put(
                        fetchWeatherListSuccess(Object.values(sampleWeatherData))
                    ));
                });

                it('and weathers are NOT fetched AT ALL', () => {
                    expect(
                        generator.next({
                            data: []
                        }).value
                    ).toEqual(delay(fakeTimer()));

                    expect(generator.next().value).toEqual(
                        put(addNewMessage(
                            MessageTypes.error,
                            new Error(MESSAGES.noWeatherDataAvailable)
                        ))
                    );
                });

                it('and weathers are NOT FULLY fetched', () => {
                    expect(
                        generator.next({
                            data: [Object.values(sampleWeatherData).slice(0, 1)],
                            errors: [
                                { city: 'cityA' },
                                { city: 'cityB' }
                            ]
                        }).value
                    ).toEqual(delay(fakeTimer()));

                    expect(generator.next().value).toEqual(
                        put(addNewMessage(
                            MessageTypes.error,
                            new Error(
                                `${MESSAGES.notAllWeatherDataAvailable} "cityA", "cityB"`
                            )
                        ))
                    )
                })
            });
        });
    });

    describe('fetchWeatherDeatil:', () => {
        beforeEach(() => {
            generator = fetchWeatherDetail({
                type: ActionTypes.fetchWeatherDetail,
                payload: Number(id)
            });

            expect(generator.next().value).toEqual(
                call(setFetchingTimer)
            );

            expect(generator.next(fakeTimer).value).toEqual(
                call(fetchWeatherByCityId, Number(id))
            );
        });

        it('should work when HAVING error', () => {
            expect(generator.throw(1).value).toEqual(
                delay(fakeTimer())
            );

            expect(generator.next().value).toEqual(
                put(fetchWeatherDetailFailed())
            );
        });

        it('should work when NO error', () => {
            expect(generator.next(data).value).toEqual(
                delay(fakeTimer())
            );

            expect(generator.next().value).toEqual(
                put(fetchWeatherDetailSuccess(data))
            );
        });
    });
});