import axios from 'axios';
import {
    createOpenWeatherURLWithCity,
    createOpenWeatherURLWithCoords,
    createOpenWeatherURLWithCityId,
} from 'helpers';
import { TypeOpenWeatherData } from './types';

export interface FetchWeatherByCitiesResult {
    data: TypeOpenWeatherData[];
    errors: {
        city: string;
        error: any;
    }[];
}

export const fetchWeatherByCities = async (
    cities: string | string[]
): Promise<FetchWeatherByCitiesResult> => {
    if (!Array.isArray(cities)) cities = [cities];
    
    const data: TypeOpenWeatherData[] = [];
    const errors: { city: string, error: any }[] = [];

    await Promise.all(
        cities.map(city => {
            return new Promise(resolve => {
                axios.get<TypeOpenWeatherData>(
                    createOpenWeatherURLWithCity(city)
                ).then(response => {
                    data.push(response.data);
                    resolve();
                }).catch(error => {
                    errors.push({
                        city,
                        error
                    });
                    resolve();
                });
            });
        })
    );

    return { data, errors };
}

export const fetchWeatherByCityId = async (
    cityId: number
): Promise<TypeOpenWeatherData> => {
    const { data } = await axios.get<TypeOpenWeatherData>(
        createOpenWeatherURLWithCityId(cityId)
    );

    return data;
}

export const fetchWeatherByCoords = async(
    lat: number,
    lon: number
): Promise<TypeOpenWeatherData> => {
    const { data } = await axios.get(createOpenWeatherURLWithCoords(lat, lon));

    return data;
}