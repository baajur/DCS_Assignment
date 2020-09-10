import axios from 'axios';
import {
    fetchWeatherByCities,
    fetchWeatherByCityId,
    fetchWeatherByCoords
} from '../weatherApis';
import {
    createOpenWeatherURLWithCity,
    createOpenWeatherURLWithCityId,
    createOpenWeatherURLWithCoords
} from 'helpers';

describe('apis/weatherApis', () => {
    let fn: jest.Mock;

    beforeEach(() => {
        fn = jest.fn();
        axios.get = fn;
    });

    afterEach(() => {
        if (fn) {
            fn.mockRestore();
        }
    });

    it('fetchWeatherByCities correctly with 1 city', async () => {
        fn.mockImplementation(() => {
            return new Promise(resolve => resolve({ data: [1] }));
        });

        const returnedData = await fetchWeatherByCities('a');
        
        expect(fn.mock.calls).toEqual([[
            createOpenWeatherURLWithCity('a')
        ]]);

        expect(returnedData).toEqual({
            data: [[1]],
            errors: []
        });
    });

    it('fetchWeatherByCities correctly with multiple cities', async () => {
        const url1 = createOpenWeatherURLWithCity('a');
        const url2 = createOpenWeatherURLWithCity('b');
        fn.mockImplementation((url: string) => {
            return new Promise((resolve, reject) => {
                if (url === url1) resolve({ data: ['aa'] });
                if (url === url2) reject('not found')
            });
        });

        const returnedData = await fetchWeatherByCities(['a', 'b']);

        expect(fn.mock.calls).toEqual([
            [url1],
            [url2]
        ]);

        expect(returnedData).toEqual({
            data: [['aa']],
            errors: [{
                city: 'b',
                error: 'not found'
            }]
        });
    });

    it('fetchWeatherByCityId correctly', async () => {
        fn.mockImplementation(() => new Promise(resolve => resolve({
            data: 1
        })));

        const url = createOpenWeatherURLWithCityId(11);
        const data = await fetchWeatherByCityId(11);

        expect(fn.mock.calls).toEqual([[url]]);
        expect(data).toEqual(1);
    });

    it('fetchWeatherByCoords correctly', async () => {
        fn.mockImplementation(() => new Promise(resolve => {
            resolve({ data: 99 });
        }));

        const url = createOpenWeatherURLWithCoords(22, 33);
        const data = await fetchWeatherByCoords(22, 33);

        expect(fn.mock.calls).toEqual([[url]]);
        expect(data).toEqual(99);
    });
});